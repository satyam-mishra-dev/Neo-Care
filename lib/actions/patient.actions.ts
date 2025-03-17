"use server"; // Ensures this runs only on the server

import { Query, ID, InputFile } from "node-appwrite";
import { BUCKET_ID, DATABASE_ID, databases, ENDPOINT, PATIENT_COLLECTION_ID, PROJECT_ID, storage, users } from "../appwrite.config";
import { parseStringify } from "../utils"; // Ensure this type exists

export const createUser = async (user: CreateUserParams) => {
    try {
        const newUser = await users.create(ID.unique(), user.email, user.phone, undefined, user.name);
        return parseStringify(newUser);
    } catch (err: any) {
        if (err && err?.code === 409) {
            const documents = await users.list([
                Query.equal("email", [user.email]),
            ]);
            return documents?.users[0];
        }
    }
};

export const getUser = async (userId: string) => {
    try {
        const user = await users.get(userId);
        return parseStringify(user);
    } catch (err) {
        console.log(err);
    }
};

export const registerUser = async ({ identificationDocument, ...patient }: RegisterUserParams) => {
    try {
        let file = null;
        let identificationDocumentUrl = null;

        if (identificationDocument) {
            console.log("Received identificationDocument:", identificationDocument);

            const blobFile = identificationDocument.get("blobFile");
            const fileName = identificationDocument.get("fileName");

            if (!blobFile || !(blobFile instanceof Blob)) {
                console.error("Invalid file blob:", blobFile);
                throw new Error("Invalid file: The uploaded file is missing or incorrect.");
            }

            console.log("Blob File:", blobFile);
            console.log("File Name:", fileName);

            // Creating Appwrite InputFile
            const inputFile = InputFile.fromBlob(blobFile, fileName);

            try {
                file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
                console.log("File uploaded successfully:", file);
            } catch (uploadError) {
                console.error("File upload error:", uploadError);
                throw new Error("File upload failed");
            }

            if (!file || !file.$id) {
                throw new Error("File upload failed, received invalid response: " + JSON.stringify(file));
            }

            identificationDocumentUrl = `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view?project=${PROJECT_ID}`;
        }

        if (!identificationDocumentUrl) {
            throw new Error("Missing required attribute 'identificationDocumentUrl'");
        }

        const newPatient = await databases.createDocument(
            DATABASE_ID!,
            PATIENT_COLLECTION_ID!,
            ID.unique(),
            {
                identificationDocumentId: file?.$id || null,
                identificationDocumentUrl,
                ...patient,
            }
        );

        console.log("New patient registered:", newPatient);
        return parseStringify(newPatient);
    } catch (err) {
        console.error("Error registering user:", err);
        throw err;
    }
};
"use server"; // Ensures this runs only on the server

import { Query, ID, InputFile } from "node-appwrite";
import { BUCKET_ID, DATABASE_ID, databases, ENDPOINT, PATIENT_COLLECTION_ID, PROJECT_ID, storage, users } from "../appwrite.config";
import { parseStringify } from "../utils"; // Ensure this type exists
import { parse } from "path";

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
export const getUser = async (userId:string)=>{
    try{
        const user = await users.get(userId);
        return parseStringify(user);
    }catch(err){
        console.log(err)
    }
}
export const registerUser = async ({identificationDocument,...patient}:RegisterUserParams)=>{
    try{
        let file;
        if (identificationDocument) {
            const inputFile = InputFile.fromBlob(
                identificationDocument?.get('blobFile') as Blob,
                identificationDocument?.get('fileName') as string,
            )
            file = await storage.createFile(BUCKET_ID!,ID.unique(),inputFile); 
        }
        console.log({
            identificationDocumentId:file?.$id || null,
                identificationDocumentUrl:`${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${PROJECT_ID}`,
                ...patient
        });
        const newPatient =await databases.createDocument(
            DATABASE_ID!,PATIENT_COLLECTION_ID!,ID.unique(),{
                identificationDocumentId:file?.$id || null,
                identificationDocumentUrl:`${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${PROJECT_ID}`,
                ...patient
            } 
        );
        return parseStringify(patient);

    }catch(err){
        console.log(err)
    }
}
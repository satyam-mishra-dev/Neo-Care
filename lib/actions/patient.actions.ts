"use server";

import { ID, InputFile, Query } from "node-appwrite";
import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

// Define types
type CreateUserParams = {
  email: string;
  phone: string;
  name: string;
};

type RegisterUserParams = {
  identificationDocument?: FormData | null;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: string;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string;
  currentMedication: string;
  familyMedicalHistory: string;
  pastMedicalHistory: string;
  identificationType: string;
  identificationNumber: string;
  treatmentConsent: boolean;
  disclosureConsent: boolean;
  privacyConsent: boolean;
  userId: string;
};

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(ID.unique(), user.email, user.phone, undefined, user.name);
    return parseStringify(newUser);
  } catch (error: any) {
    if (error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);
      return existingUser.users[0];
    }
    console.error("Error creating user:", error);
    throw error;
  }
};

// GET USER
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);
    return parseStringify(user);
  } catch (error) {
    console.error("Error retrieving user details:", error);
    throw error;
  }
};

// REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    let fileId = null;
    let fileUrl = null;

    if (identificationDocument) {
      console.log("Processing identification document");
      
      const blobFile = identificationDocument.get('blobFile') as Blob;
      const fileName = identificationDocument.get('fileName') as string;
      
      if (blobFile && fileName) {
        try {
          const uniqueFileId = ID.unique();
          const inputFile = InputFile.fromBlob(blobFile, fileName);
          
          console.log("Uploading file to Appwrite storage...");
          const file = await storage.createFile(BUCKET_ID!, uniqueFileId, inputFile);
          
          if (file?.$id) {
            fileId = file.$id;
            fileUrl = `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}`;
          }
        } catch (uploadError) {
          console.error("File upload error:", uploadError);
        }
      }
    }

    // Create the patient document
    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: fileId,
        identificationDocumentUrl: fileUrl,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("Error registering patient:", error);
    throw error;
  }
};

// GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error("Error retrieving patient details:", error);
    throw error;
  }
};

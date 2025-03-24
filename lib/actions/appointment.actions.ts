"use server"


import { APPOINTMENT_COLLECTION_ID, databases ,DATABASE_ID} from "../appwrite.config";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";
import { get } from "http";


export const CreateAppointment = async (appointment: CreateAppointmentParams) => {
    try{
        const newAppointment = await databases.createDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            ID.unique(),
            appointment
        )
        return parseStringify(newAppointment);
    }catch(err){
        console.error("Error creating appointment:", err);
    }


}
export const getAppointment = async (appointmentId: string) => {
    try{
        const appointment = await databases.getDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            appointmentId
        )
        return parseStringify(appointment);

    }catch(err){
        console.error("Error getting appointment:", err);
    }
}
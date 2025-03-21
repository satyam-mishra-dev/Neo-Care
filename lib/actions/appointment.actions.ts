import { APPOINTMENT_COLLECTION_ID, databases } from "../appwrite.config";

export const CreateAppointment = async (appointment: CreateAppointmentParams) => {
    try{
        const newAppointment = await databases.createDocument(
            DATABASE_ID,
            APPOINTMENT_COLLECTION_ID,
            ID.unique(),
        )
    }catch(err){
        console.error("Error creating appointment:", err);
    }


}
import { APPOINTMENT_COLLECTION_ID, databases ,DATABASE_ID} from "../appwrite.config";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";


export const CreateAppointment = async (appointment: CreateAppointmentParams) => {
    try{
        const newAppointment = await databases.createDocument(
            DATABASE_ID,
            APPOINTMENT_COLLECTION_ID,
            ID.unique(),
            appointment
        )
        return parseStringify(newAppointment);
    }catch(err){
        console.error("Error creating appointment:", err);
    }


}
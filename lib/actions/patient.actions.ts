"use server"; // Ensures this runs only on the server

import { Query, ID } from "node-appwrite";
import { users } from "../appwrite.config";
import { CreateUserParams } from "@/types"; // Ensure this type exists

export const createUser = async (user: CreateUserParams) => {
    try {
        const newUser = await users.create(ID.unique(), user.email, user.phone, undefined, user.name);
        return newUser;
    } catch (err: any) {
        if (err && err?.code === 409) {
            const documents = await users.list([
                Query.equal("email", [user.email]),
            ]);
            return documents?.users[0];
        }
    }
};

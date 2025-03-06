import {Query} from "node-appwrite"
import {users} from "../appwrite.config"
import {ID} from "node-appwrite"

export const createUser = async(user: CreateUserParams)=>{
    try{
        const newUser = await users.create(ID.unique(),user.email,user.phone,undefined,user.name)
    }catch(err:any){
        if(err && err?.code===409){
            const documents = await users.list([
                Query.equal('email',[user.email])
            ])
            return documents?.users[0]
        }
    }
}
import React from "react";
import Image from "next/image"
import Link from "next/link"
import RegisterForm from "@/components/forms/RegisterForm"
import {getUser} from "@/lib/actions/patient.actions"
const newAppointment = async ({params:{userId}}:SearchParamProps) =>{
    const user= await getUser(userId)
    return (
    <div className ="flex h-screen max-h-screen">
        <section className ="remove-scrollbar container ">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-12">
            <Image 
            src= "/assets/icons/logo-full.svg"
            height={1000}
            width ={1000}
            alt ="patient"
            className="mb-12 h-10 w-fit"
            />
          
        </div>
        </section>
    </div>
      );
}

export default newAppointment
import React from "react";
import Image from "next/image"
import Link from "next/link"
import RegisterForm from "@/components/forms/RegisterForm"
import {getUser} from "@/lib/actions/patient.actions"
import AppointmentForm from "@/components/forms/AppointmentForm";
const Register = async ({params:{userId}}:SearchParamProps) =>{
    const user= await getUser(userId)
    return (<div className ="flex h-screen max-h-screen">
        <section className ="remove-scrollbar container ">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-12">
            <Image 
            src= "/assets/icons/logo-full.svg"
            height={1000}
            width ={1000}
            alt ="patient"
            className="mb-12 h-10 w-fit"
            />
            <RegisterForm user={user}/>
            <div className="text-14-regular">
              <p className ="justify-items-end text-dark-600 xl:text-left copyright py-12">© 2025 NeoCare</p>
              
            </div>
          </div>
        </section>
        <Image 
      src="/assets/images/register-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img  max-w-[450PX]"
    />
    
        </div>
      );
}

export default Register
import React from "react";
import Image from "next/image"
import Link from "next/link"
import RegisterForm from "@/components/forms/RegisterForm"
import {getUser} from "@/lib/actions/patient.actions"
const Register = async ({params:{userId}}:SearchParamProps) =>{
    const user= await getUser(userId)
    return (<div className ="flex h-screen max-h-screen">
        <section className ="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <Image 
            src= "/assets/icons/logo-full.svg"
            height={1000}
            width ={1000}
            alt ="patient"
            className="mb-12 h-10 w-fit"
            />
            <RegisterForm user={user}/>
            <div className="text-14-regular">
              <p className ="justify-items-end text-dark-600 xl:text-left">© 2025 NeoCare</p>
              <div className="my-0 mx-5">
              <Link href="/?admin=true" className="text-green-500 xl:text-right">
                Admin
              </Link>
              </div>
            </div>
          </div>
        </section>
        <Image 
      src="/assets/images/register-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img w-full sm:max-w-[390px] md:max-w-[50%]"
    />
    
        </div>
      );
}

export default Register
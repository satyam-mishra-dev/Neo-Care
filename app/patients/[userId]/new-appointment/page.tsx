import Image from "next/image";
import { Button }from "@/components/ui/button";
import Link from "next/link";
import Patientform from "@/components/forms/Patientform"
import AppointmentForm from "@/components/forms/AppointmentForm";
export default function Home() {
  return (<div className ="flex h-screen max-h-screen">
    <section className ="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[860px]">
        <Image 
        src= "/assets/icons/logo-full.svg"
        height={1000}
        width ={1000}
        alt ="patient"
        className="mb-12 h-10 w-fit "
        />
        
        <AppointmentForm/>
        <div className="text-14-regular">
          <p className ="justify-items-end text-dark-600 xl:text-left fixed bottom-10 left-10 ">© 2025 NeoCare</p>
          
        </div>
        
      </div>
    </section>
    <Image 
  src="/assets/images/appointment-img.png"
  height={1000}
  width={1000}
  alt="appointment"
  className="side-img w-full max-w-[40%] bg-bottom bg-cover"
/>

    </div>
  );
}

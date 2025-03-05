import Image from "next/image";
import { Button }from "@/components/ui/button";
import Link from "next/link";
import Patientform from "@/components/forms/Patientform"
export default function Home() {
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
        <Patientform />
        <div className="text-14-regular">
          <p className ="justify-items-end text-dark-600 xl:text-left">© 2025 NeoCare</p>
          <Link href="/?admin=true" className="text-green-500 xl:text-right">
            Admin
          </Link>
        </div>
      </div>
    </section>
    <Image 
  src="/assets/images/onboarding-img.png"
  height={1000}
  width={1000}
  alt="patient"
  className="side-img w-full sm:max-w-[75%] md:max-w-[50%]"
/>

    </div>
  );
}

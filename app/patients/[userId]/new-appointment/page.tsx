import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getPatientById } from "@/lib/actions/patient.actions";
import AppointmentForm from "@/components/forms/AppointmentForm";

interface SearchParamProps {
  params: { userId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function NewAppointment({ params: { userId } }: SearchParamProps) {
  let patient;

  try {
    patient = await getPatientById(userId);
  } catch (error) {
    console.error('Error fetching patient:', error);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500">Error loading patient data</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500">Patient not found</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient?.$id || userId}
          />
          <div className="text-14-regular">
            <p className="copyright mt-3 py-6">© 2025 NeoCare</p>
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

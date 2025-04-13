import React from 'react';
import Image from 'next/image';
import { getAppointment } from '@/lib/actions/appointment.actions';
import { Doctors } from '@/constants';
import { format } from "date-fns"; // ✅ Add date formatting
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Change this import

interface SearchParamProps {
  params: { userId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Success = async ({ params: { userId }, searchParams }: SearchParamProps) => {
  const appointmentId = searchParams?.appointmentId as string;
  
  if (!appointmentId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500">Invalid appointment ID</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            Back to Appointments
          </Link>
        </Button>
      </div>
    );
  }

  const appointment = await getAppointment(appointmentId);
  
  if (!appointment) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500">Appointment not found</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            Back to Appointments
          </Link>
        </Button>
      </div>
    );
  }

  const doctor = Doctors.find((doc) => doc.name === appointment?.primaryPhysician) || {
    name: 'Unknown Doctor',
    image: '/assets/icons/default-doctor.svg'
  };

  const formattedDate = appointment?.schedule ? 
    format(new Date(appointment.schedule), "MMMM d, yyyy 'at' h:mm aa") : 
    "Date not set";

  return (
    <div className="max-w-4xl mx-auto px-4"> {/* <- new wrapper */}
      <section className="flex flex-col items-center gap-4">
        <div className='px-10 py-10 mt-10'>
          <Image
            src="/assets/icons/logo-full.svg"
            height={50}
            width={50}
            alt="logo"
            className="h-10 w-fit"
          />
        </div>
        <Image
          src="/assets/gifs/success.gif"
          height={200}
          width={200}
          alt="success"
        />
        <h2 className='header mt-10 mb-6 max-w-[600px] text-center mx-auto'>
          Your <span className='text-green-500'>appointment request</span> has been successfully submitted!!
        </h2>
        <p className='text-center'>We will be in touch shortly to confirm the appointment</p>
      </section>
  
      <section className='request-details'>
       
          <p className='text-lg font-medium'>
            Requested appointment details:
          </p>
  
          <div className='flex items-center gap-4'>
            <Image
              src={doctor.image || '/assets/icons/default-doctor.svg'}
              height={30}
              width={30}
              alt='doctor'
              className='rounded-full object-cover'
            />
            <p className='whitespace-nowrap'>Dr. {doctor.name}</p>
          </div>
  
          <div className='flex items-center gap-2'>
            <Image
              src="/assets/icons/calendar.svg"
              height={20}
              width={20}
              alt='calendar'
            />
            <p>{formattedDate}</p>
          </div>
          
      </section>

      <div className="flex flex-col items-center gap-6 mt-8">
        <Button variant="outline" className="shad-primary-btn min-w-[200px] h-12" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
        <p className='text-gray-500 text-sm'>© 2025 NeoCare</p>
      </div>
    </div>
  );
}

export default Success;
import React from 'react';
import Image from 'next/image';
import { getAppointment } from '@/lib/actions/appointment.actions';
import { Doctors } from '@/constants';


const Success =async  ({params:{userId},searchParams}:SearchParamProps) => {
  const appointmentId =(searchParams?.appointmentId as string | undefined);
  const appointment = await getAppointment(appointmentId!); 
  const doctor = Doctors.find((doc) => doc.name === appointment.primaryPhysician);
  return (
    <>
        <section className="flex flex-col items-center gap-4">
          <div className='px-10 py-10 mt-10'>
          <Image
          src="/assets/icons/logo-full.svg"
          height={50}
          width={50}
          alt="logo"
          className="h-10 w-fit "
        />
        </div>
        <Image
        src="/assets/gifs/success.gif"
        height={200}
        width={200}
        alt="success"
        />
        <h2 className='header mt-10 mb-6 max-w-[600px] text-center mx-15'>Your <span className='text-green-500'>appointment request </span>has been successfully submitted!!</h2>
        <p className='text-center'>We will be in touch shortly to confirm the appointment</p>
        </section>
      <section className='request-details'>
        <p>
          Requested appointment details:
        </p>
        <div className='flex items-center gap-4'>
          <Image
          src={doctor?.image}
          height={100}
          width={100}  
          alt='doctor'
          className='size-6'
          />
          <p className='whitespace-nowrap'>Dr. {doctor?.name}</p>
          </div>
          <div className='flex gap-2'>
            <Image
            src="/assets/icons/calendar.svg"
            height={20}
            width={20}
            alt='calendar'

            />
            <p></p>
            </div>
      </section>
    </>
  );
}
export default Success;
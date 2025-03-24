import React from 'react';
import Image from 'next/image';
import  SuccessIcon  from '@/components/ui/checkCircle';
const Success = () => {
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
    
    </>
  );
};

export default Success;
import React from 'react';
import Image from 'next/image';
import  SuccessIcon  from '@/components/ui/checkCircle';
const Success = () => {
  return (
    <>
      <div className="flex h-screen items-start justify-center pt-8"> {/* ✅ Adjusted alignment */}
        <div className="flex flex-col items-center gap-4">
          <Image
          src="/assets/icons/logo-full.svg"
          height={50}
          width={50}
          alt="logo"
          className="h-10 w-fit "
        />
        <div className='mt-16'>
        <SuccessIcon />
        </div>
        </div>
    
      </div>
    </>
  );
};

export default Success;
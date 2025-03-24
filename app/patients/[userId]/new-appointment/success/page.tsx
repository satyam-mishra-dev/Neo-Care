import React from 'react';
import Image from 'next/image';
import  SuccessIcon  from '@/components/ui/checkCircle';
const Success = () => {
  return (
    <>
      <div className="flex h-screen items-start justify-center pt-8"> {/* ✅ Adjusted alignment */}
        <Image
          src="/assets/icons/logo-full.svg"
          height={50}
          width={50}
          alt="logo"
          className="h-10 w-fit"
        />
        <SuccessIcon />
    
      </div>
    </>
  );
};

export default Success;
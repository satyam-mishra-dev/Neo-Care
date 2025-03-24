import React from 'react';
import Image from 'next/image';
const Success = () => {
  return (
    <>
      <div className="flex h-screen items-start justify-center pt-8"> {/* ✅ Adjusted alignment */}
        <Image
          src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="logo"
          className="h-10 w-fit"
        />
      </div>
    </>
  );
};

export default Success;
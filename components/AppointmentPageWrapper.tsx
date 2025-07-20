"use client";

import { useEffect } from "react";

interface AppointmentPageWrapperProps {
  children: React.ReactNode;
}

export const AppointmentPageWrapper = ({ children }: AppointmentPageWrapperProps) => {
  useEffect(() => {
    document.body.classList.add('appointment-page');
    document.documentElement.classList.add('appointment-page');
    
    return () => {
      document.body.classList.remove('appointment-page');
      document.documentElement.classList.remove('appointment-page');
    };
  }, []);

  return <>{children}</>;
}; 
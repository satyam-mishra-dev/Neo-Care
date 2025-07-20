import Image from "next/image";

import { AppointmentPageWrapper } from "@/components/AppointmentPageWrapper";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <AppointmentPageWrapper>
      <div className="fixed inset-0 flex overflow-hidden">
        {/* Left Section - Form */}
        <section className="flex-1 flex flex-col overflow-hidden relative">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-teal-50 to-mint-50 opacity-30 z-0"></div>
          
          <div className="flex-1 flex flex-col justify-center px-4 py-6 sm:px-6 lg:px-12 lg:py-16 relative z-10">
            {/* Logo */}
            <div className="mb-6 lg:mb-8">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="logo"
                className="h-8 lg:h-10 w-fit"
              />
            </div>

            {/* Form Container */}
            <div className="flex-1 flex flex-col justify-center max-w-xl lg:max-w-2xl mx-auto w-full">
              <AppointmentForm
                patientId={patient?.$id}
                userId={userId}
                type="create"
              />
            </div>

            {/* Footer */}
            <div className="mt-6 lg:mt-8 text-center">
              <p className="text-xs lg:text-sm text-gray-500">© 2024 CarePluse</p>
            </div>
          </div>
        </section>

        {/* Right Section - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-mint-50 z-0"></div>
          <div className="relative h-full flex items-center justify-center p-8 z-10">
            <div className="relative">
              {/* Image Container with Enhanced Styling */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute -inset-8 bg-gradient-to-r from-teal-200/30 to-mint-200/30 rounded-3xl blur-3xl z-0"></div>
                
                <Image
                  src="/assets/images/appointment-img.png"
                  height={600}
                  width={500}
                  alt="appointment"
                  className="relative rounded-2xl shadow-2xl max-w-full h-auto border-4 border-white/20 z-10"
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center shadow-lg animate-float z-20">
                <div className="w-8 h-8 bg-teal-600 rounded-full opacity-20"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-mint-100 to-mint-200 rounded-full flex items-center justify-center shadow-lg animate-float z-20" style={{ animationDelay: "1.5s" }}>
                <div className="w-6 h-6 bg-mint-600 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppointmentPageWrapper>
  );
};

export default Appointment;

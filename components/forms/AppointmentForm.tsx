"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import CustomForm from "@/components/ui/CustomForm";
import SubmitButton from "@/components/ui/SubmitButton"
import { useState } from "react";
import {UserFormValidation} from "@/lib/Validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"

export enum FieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}

const AppointmentForm = ({userId,patientId,type}:{userId:string,patientId:string,type:"create" | "cancel"}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof UserFormValidation>) {
    console.log("Submitting form:", values); // ✅ Debugging step
    setIsLoading(true);

    try {
      const user = await createUser(values);
      console.log("User created:", user); // ✅ Debugging step

      if (user) {
        router.push(`/patients/${user.$id}/register`);
      }
    } catch (err) {
      console.error("Error creating user:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header text-red-300">Hey there!! 👋</h1>
          <p className="text-dark-700">Request a new appointment in a few seconds</p>
        </section>

        <CustomForm
            fieldType={FieldType.SELECT}
            control={form.control}
            name="primaryPhysician"
            label="Doctor"
            placeholder="Select Doctor"
          />
        <div className="flex flex-col gap-6 xl:flex-row">
        <CustomForm 
          fieldType={FieldType.TEXTAREA}
          control={form.control}
          name="email"
          label="Reason for Appointment"
          placeholder="Routine checkup, etc."
          iconAlt="reason"
        />
        <CustomForm 
          fieldType={FieldType.TEXTAREA}
          control={form.control}
          name="email"
          label="Additional Notes"
          placeholder="Any requests or additional information"
          iconAlt="additionalInfo"
        />
        </div>
        

        <CustomForm 
          fieldType={FieldType.DATE_PICKER}
          control={form.control}
          name="phone"  // ✅ Fixed name
          label="Expected appointment date"
          placeholder="Select appointment date"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
}

export default AppointmentForm;

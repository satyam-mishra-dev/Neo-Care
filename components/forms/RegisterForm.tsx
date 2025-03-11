"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl } from "@/components/ui/form"
import CustomForm from "@/components/ui/CustomForm";
import SubmitButton from "@/components/ui/SubmitButton"
import { useState } from "react";
import formValidation from "@/lib/Validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"
import {FieldType}  from "./Patientform"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import {genderOptions} from "@/constants/index"
import { Label } from "@radix-ui/react-label"
const Registerform = ({user}:{user:User}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formValidation>) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header text-red-300">Welcome !! 👋</h1>
          <p className="text-dark-700">Let us know more about you!!</p>
        </section>
        <section className="mb-12 space-y-6">
          <div className ="mb-9 space-y-1"><h2 className="text-dark-700 sub-header">Personal Information</h2></div>
        </section>

        <CustomForm 
          fieldType={FieldType.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="Full Name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
            <CustomForm 
                      fieldType={FieldType.INPUT}
                      control={form.control}
                      name="email"
                      label="E-mail"
                      placeholder="abc@gmail.com"
                      iconSrc="/assets/icons/email.svg"
                      iconAlt="email"
                    />
            
                    <CustomForm 
                      fieldType={FieldType.PHONE_INPUT}
                      control={form.control}
                      name="phone"  // ✅ Fixed name
                      label="Phone Number"
                      placeholder="+1-99933399393"
                    />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
            <CustomForm 
                      fieldType={FieldType.DATE_PICKER}
                      control={form.control}
                      name="Birth Date"
                      label="Date of Birth"
                      placeholder="28-12-2005"
                      
                    />
            
            <CustomForm 
  fieldType={FieldType.SKELETON}
  control={form.control}
  name="gender"
  label="Gender"
  renderSkeleton={(field) => (
    <FormControl>
      <RadioGroup 
        className="flex h-11 gap-6 xl:justify-between" 
        onValueChange={field.onChange}
        defaultValue={field.value } 
      >
        {genderOptions.map((option) => (
          <div key={option} className="radio-group ">
            
            <RadioGroupItem 
              value={option} 
              id={option} 
            />

            
            <Label 
              htmlFor={option} 
              className="cursor-pointer"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </FormControl>
  )}
/>
 </div>
        <div className="flex flex-col gap-6 xl:flex-row">
        <CustomForm 
          fieldType={FieldType.INPUT}
          control={form.control}
          name="address"
          label="Address"
          placeholder="23rd Street, Alabama"
        />
        <CustomForm 
          fieldType={FieldType.INPUT}
          control={form.control}
          name="occupation"
          label="Occupation"
          placeholder="Software Developer"
        />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
        <CustomForm 
          fieldType={FieldType.INPUT}
          control={form.control}
          name="emergencyContactName"
          label="Emergency Contact Name"
          placeholder="Guardian's Name"
        />
        <CustomForm 
          fieldType={FieldType.PHONE_INPUT}
          control={form.control}
          name="emergencyContactNumber"
          label="Emergency Contact Number"
          placeholder="+123-111-222-4444"
        />
        </div>
        <section className="mb-12 space-y-6">
          <div className ="mb-9 space-y-1"><h2 className="text-dark-700 sub-header">Medical Information</h2></div>
        </section>
        <CustomForm 
          fieldType={FieldType.SELECT}
          control={form.control}
          name="primaryPhysician"
          label="Primary Physician"
          placeholder="Primary Physician"
        >
            {["Devi Shetty", "Naresh Trehan", "Randeep Guleria", "Mukesh Hariawala", "Sudhansu Bhattacharyya"]}
        </CustomForm>

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
}

export default Registerform;

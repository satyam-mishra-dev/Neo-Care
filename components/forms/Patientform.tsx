"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import CustomForm from "@/components/ui/CustomForm";
import SubmitButton from "@/components/ui/SubmitButton"
import { useState } from "react";
import formValidation from "@/lib/Validation"
export enum FieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',

}



 
const  Patientform=()=> {
  const[isLoading,setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      username: "",
      name : "",
      email:"",
      phone: "", 
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    try{
      const userData = {name , email , phone};
      const user = await createUser(userData);
      if(user){
        
      }
    }
    catch(err){
      console.log(err);
    }
    console.log(values)
  }

    return (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className ="mb-12 space-y-4 ">
                    <h1 className= "header text-red-300 ">Hi there 👋</h1>
                    <p className="text-dark-700">Schedule your appointment </p>
                </section>
                <CustomForm 
                    fieldType = {FieldType.INPUT}
                    control ={form.control}
                    name = "name"
                    label ="Full Name"
                    placeholder = "Full Name"
                    iconSrc ="/assets/icons/user.svg"
                    iconAlt = "user"
                />
                <CustomForm 
                    fieldType = {FieldType.INPUT}
                    control ={form.control}
                    name = "email"
                    label ="E-mail"
                    placeholder = "abc@gmail.com"
                    iconSrc ="/assets/icons/email.svg"
                    iconAlt = "email"
                />
                <CustomForm 
                    fieldType = {FieldType.PHONE_INPUT}
                    control ={form.control}
                    name = "phone-number"
                    label ="Phone Number"
                    placeholder = "+1-99933399393"
                />
                <SubmitButton isLoading = {isLoading}>Get Started</SubmitButton>
              </form>
            </Form>
    );
}

export default Patientform
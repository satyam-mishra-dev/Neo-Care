"use client";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldType } from "@/components/forms/Patientform"; // ✅ Import Enum

interface CustomProps {
  control: Control<any>;
  fieldType: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
}

const CustomForm = ({ control, fieldType, name, label, placeholder }: CustomProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FieldType.CHECKBOX && label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {fieldType === FieldType.INPUT ? (
              <Input {...field} placeholder={placeholder} />
            ) : (
              <p>Unsupported Field Type</p>
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomForm;

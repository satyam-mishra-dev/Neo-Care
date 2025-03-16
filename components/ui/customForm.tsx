"use client";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import Image from "next/image"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Textarea} from "./textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { E164Number } from "libphonenumber-js";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldType } from "@/components/forms/Patientform"; // ✅ Import Enum
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Select, SelectContent, SelectTrigger, SelectValue } from "./select";
interface CustomProps {
  control: Control<any>;
  fieldType: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  showTimeSelect?: boolean;
  dateFormat?: string;
  renderSkeleton?: (field: any) => JSX.Element | null;
  children?: React.ReactNode;
}
const RenderField = ({field, props } : {field: any; props:CustomProps })=>{
    const {fieldType, iconSrc ,iconAlt ,placeholder,showTimeSelect,dateFormat,renderSkeleton} =props;
    switch (fieldType){
        case FieldType.INPUT:
            
            return (
                <div className ="flex rounded-md boreder-dark-500 bg-dark-400">
                    {iconSrc && (
                        <Image
                        src={ iconSrc}
                        height ={24}
                        width ={24}
                        alt = {iconAlt || 'icon'}
                        className ="ml-2"
                        />
                    )}
                    <FormControl>
                        <Input
                        placeholder ={placeholder}
                        {...field}
                        className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            );

        case FieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput
                    defaultCountry ="US"
                    placeholder ={placeholder}
                    international 
                    withCountryCallingCode
                    value ={field.value as E164Number | undefined}
                    onChange ={field.onChange}
                    className ="input-phone"
                     />
                </FormControl>
            );
        case FieldType.DATE_PICKER:
          return(
            <div className="flex rounded-md border border-dark-500 bg-dark-400">
              <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt ="Calendar"
              className="ml-12"
              />
              <FormControl>
                <DatePicker selected={field.value} onChange={(date)=>field.onChange(date)}
                  dateFormat={dateFormat ?? 'MM/dd/yyyy'}
                  showTimeSelect={showTimeSelect ?? false}
                  timeInputLabel = "Time"
                  wrapperClassName="date-picker"
                  />
              </FormControl>
            </div>
          )
        case FieldType.SKELETON:
          return (
            renderSkeleton ? renderSkeleton(field) : null
          );
        case FieldType.SELECT:
          return(
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl >
                  <SelectTrigger className="shad-select-trigger">
                  <SelectValue placeholder={placeholder}/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="shad-select-content">
                  {props.children}
                </SelectContent>
              </Select>
            </FormControl>
          );
        case FieldType.TEXTAREA:
          return(
            <FormControl>
              <Textarea
              placeholder={placeholder}
              className="shad-textArea"
              disabled={props.disabled}
              {...field} // Ensure field props are spread here
              />
            </FormControl>

          );
        case FieldType.CHECKBOX:
          return(
            <FormControl>
              <div className="flex items-center gap-4">
                <Checkbox 
                  id={props.name}
                  checked={field.value || false} // Ensure field value is handled correctly
                  onCheckedChange={(checked) => field.onChange(checked)} // Use onCheckedChange for Radix UI Checkbox
                />
                <FormLabel htmlFor={props.name} className="checkbox-label">{props.label}</FormLabel>
              </div>
            </FormControl>
          );

    }

}
const CustomForm = (props: CustomProps) => {
    const {control ,fieldType, name ,label} =props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FieldType.CHECKBOX && label && <FormLabel>{label}</FormLabel>}
          <RenderField field ={field} props ={props} />
          <FormMessage className ="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomForm;
/* eslint-disable no-unused-vars */
import { E164Number } from "libphonenumber-js/core";
import { User, Mail, Calendar } from "lucide-react";
import Image from "next/image";
import ReactDatePicker from "react-datepicker";
import { Control } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { Checkbox } from "./ui/checkbox";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-lg border border-gray-200 bg-white focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-200 transition-all">
          {props.iconAlt && (
            <div className="flex items-center justify-center w-12 h-12 text-gray-400">
              {props.iconAlt === "user" && <User className="w-5 h-5" />}
              {props.iconAlt === "email" && <Mail className="w-5 h-5" />}
              {props.iconAlt === "calendar" && <Calendar className="w-5 h-5" />}
            </div>
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-900 placeholder:text-gray-500"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className="rounded-lg border border-gray-200 bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all text-gray-900 placeholder:text-gray-500"
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="IN"
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="rounded-lg border border-gray-200 bg-white focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-200 transition-all h-14 px-3"
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
              className="text-teal-600 border-gray-300 focus:ring-teal-500"
            />
            <label htmlFor={props.name} className="text-sm font-medium text-gray-700 cursor-pointer">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-lg border border-gray-200 bg-white focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-200 transition-all">
          <div className="flex items-center justify-center w-12 h-12 text-gray-400">
            <Calendar className="w-5 h-5" />
          </div>
          <FormControl>
            <ReactDatePicker
              showTimeSelect={props.showTimeSelect ?? false}
              selected={field.value}
              onChange={(date: Date) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker"
              className="border-0 bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-500"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="rounded-lg border border-gray-200 bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all text-gray-900">
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="text-sm font-semibold text-gray-700 mb-2 block">{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />

          <FormMessage className="text-red-500 text-sm mt-1" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
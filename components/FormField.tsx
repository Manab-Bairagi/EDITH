import React from "react";
import { Input } from "@/components/ui/input";
import { Controller, FieldValues, Path, Control } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "file";
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className="input" type={type} placeholder={placeholder} {...field} />
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;

import * as Switch from "@radix-ui/react-switch";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

type FormSwitchFieldProps = {
  form: UseFormReturn<any>;
  fieldName: string
  label: string
};

const FormSwitchField = ({ form, fieldName, label }: FormSwitchFieldProps) => {
  return (
    <>
       <label className="font-Poppins text-neutral-950 text-xl">
        {label}
      </label>
      <Controller
        control={form.control}
        name={fieldName}
        render={({ field }) => (
          <Switch.Root
            className="w-[42px] h-[25px] rounded-full relative border-shutters-100 bg-shutters-100  data-[state=checked]:bg-shutters-500 outline-none cursor-default"
            checked={field.value}
            onCheckedChange={field.onChange}
            defaultChecked={true}
            name={fieldName}
          >
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
        )}
      />
    </>
  );
};

export default FormSwitchField;

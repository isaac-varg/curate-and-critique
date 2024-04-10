import * as Select from "@radix-ui/react-select";
import React from "react";
import { UseFormReturn, Controller } from "react-hook-form";
import { TbAB } from "react-icons/tb";

type SelectFieldProps = {
  form: UseFormReturn<any>;
  fieldName: string;
  label: string;
};

const SelectField = ({ form, fieldName, label }: SelectFieldProps) => {
  return (
      <Controller
        control={form.control}
        name={fieldName}
        render={({ field }) => (
          <>
          <label className="font-poppins text-city-900 text-xl">
          {label}
        </label>
          <Select.Root onValueChange={field.onChange} value={field.value}>
            <Select.Trigger>
              <div  className="text-left px-4 py-4 border-2 border-city-100 bg-city-100 rounded-lg focus:outline-none focus:ring-0 focus:border-city-500 text-xl text-neutral-950">
              <Select.Value placeholder="Select a value" /></div>
         
            </Select.Trigger>
            <Select.Portal >
              <Select.Content position="popper"   className='overflow-hidden rounded-b-lg'>
                <Select.ScrollUpButton />
                <Select.Viewport className="px-2 text-xl font-inter bg-orange-200">

          
                    <Select.Item value="onsie">One</Select.Item>
                    <Select.Item value="twosie">2</Select.Item>
                    <Select.Item value="threesie">3</Select.Item>
         
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Select.Content>
            </Select.Portal>
          </Select.Root>  
          </>
        )}
      />

  );
};

export default SelectField;


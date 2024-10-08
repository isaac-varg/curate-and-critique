"use client"
import { SelectOption } from "@/types/SelectOption";
import React from "react";
import { UseFormReturn } from "react-hook-form";

type SelectFieldProps = {
  form: UseFormReturn<any>;
  label: string;
  fieldName: string;
  options: SelectOption[]
};

const SelectField = ({ form, label, fieldName, options }: SelectFieldProps) => {
  return (
    <div className='flex flex-col gap-y-1'>
    <label className="font-poppins text-city-900 text-xl">{label}</label>
      <select
        className="px-4 py-4 border-2 border-city-100 bg-city-100 rounded-lg focus:outline-none focus:ring-0 font-inter font-medium focus:border-city-500 text-xl text-city-900 space-y-4"
        {...form.register(fieldName)}
      >
            {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    
      </select>
    </div>
  );
};

export default SelectField;

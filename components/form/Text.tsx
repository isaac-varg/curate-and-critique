import { UseFormReturn } from 'react-hook-form';

type TextProps = {
    form: UseFormReturn<any>;
    required?: boolean;
    fieldName: string;
    label: string;
};
  const Text = ({ form, required = false, fieldName, label}: TextProps) => {
    return (
      <>
        <label className="font-poppins text-city-900 text-xl">
          {label}
        </label>
        <input
          {...form.register(fieldName, { required: required })}
          className="px-4 py-4 border-2 border-city-100 bg-city-100 rounded-lg focus:outline-none focus:ring-0 focus:border-city-500 text-xl text-neutral-950"
          placeholder={label}
        />
        {form.formState.errors.name && <span>This field is required</span>}
      </>
    );
  };
  
  export default Text;
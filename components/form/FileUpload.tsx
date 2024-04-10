import { UseFormReturn } from 'react-hook-form';

type FileUploadProps = {
    form: UseFormReturn<any>;
    required: boolean;
    fieldName: string;
    label: string;
};
  const FileUpload = ({ form, required, fieldName, label}: FileUploadProps) => {
    return (
      <>
        <label className="font-poppins text-city-900 text-xl">
          {label}
        </label>
        <input
            type="file"
          {...form.register(fieldName, { required: required })}
          className="px-4 py-4 border-2 border-city-100 bg-city-100 rounded-lg focus:outline-none focus:ring-0 focus:border-city-500 text-xl text-neutral-950"
        />
        {form.formState.errors.name && <span>This field is required</span>}
      </>
    );
  };
  
  export default FileUpload;
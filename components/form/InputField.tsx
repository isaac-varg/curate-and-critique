import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import FormError from "./FormError";
import FormLabel from "./Label";

type InputFieldProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    required: boolean;
    fieldName: Path<T>;
    label: string;
    errorWarning: string;
};

const InputField = <T extends FieldValues>({ form, required, fieldName, label, errorWarning }: InputFieldProps<T>) => {
    return (
        <div className="flex flex-col gap-y-1">
            <FormLabel>{label}</FormLabel>
            <input
                {...form.register(fieldName, { required, })}
                placeholder={label}
                className="w-full input"
            />
            {form.formState.errors.name && <FormError warning={errorWarning} />}
        </div>
    )
}

export default InputField

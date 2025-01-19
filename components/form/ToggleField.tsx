import React from 'react'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import FormLabel from './Label';

type ToggleFieldProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    fieldName: Path<T>;
    label: string;
    useIcons?: boolean
    enabledIcon?: JSX.Element
    disabledIcon?: JSX.Element
};

const ToggleField = <T extends FieldValues>({ form, fieldName, label, useIcons = false, enabledIcon, disabledIcon }: ToggleFieldProps<T>) => {
    return (
        <div className='flex flex-col gap-y-1'>
            <FormLabel>{label}</FormLabel>


            {useIcons &&

                <label className='toggle text-base-content'>
                    <input type="checkbox" placeholder='asdf' className="" {...form.register(fieldName)} />

                    <span aria-label='disabled' className='text-sm flex items-center'>{disabledIcon}</span>

                    <span aria-label='enabled' className='text-sm flex items-center'>{enabledIcon}</span>
                </label>
            }

            {!useIcons && <input type="checkbox" placeholder='asdf' className="toggle" {...form.register(fieldName)} />}
        </div>
    )
}

export default ToggleField


'use client';

import React from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';

type FormRootProps<T extends FieldValues> = {
    children: React.ReactNode;
    form: UseFormReturn<T>;
    onSubmit: (data: T) => void;
};

const FormRoot = <T extends FieldValues>({
    children,
    form,
    onSubmit,
}: FormRootProps<T>) => {
    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-6">{children}</div>
        </form>
    );
};

export default FormRoot;



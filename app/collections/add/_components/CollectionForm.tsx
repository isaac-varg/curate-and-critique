
'use client';

import { useForm } from 'react-hook-form';
import { Form } from '~/components/form';

type Inputs = {
    example: string;
    exampleRequired: string;
};

const CollectionForm = () => {
    const form = useForm<Inputs>();

    const handleSubmit = (data: Inputs) => {
        console.log('Form Data:', data);
    };

    return (
        <div className='card bg-amber-100'>
            <div className='card-body'>
                <Form.Root<Inputs> form={form} onSubmit={handleSubmit}>
                    <input
                        {...form.register('example')}
                        placeholder="Enter an example"
                        className="input"
                    />


                    <input {...form.register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {form.formState.errors.exampleRequired && <p className="validator-hint">This is req</p>
                    }

                    <button type="submit" className="btn">
                        Submit
                    </button>
                </Form.Root>
            </div>
        </div>
    );
};

export default CollectionForm;



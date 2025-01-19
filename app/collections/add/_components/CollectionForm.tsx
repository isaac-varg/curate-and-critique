'use client';

import { useForm } from 'react-hook-form';
import { Form } from '~/components/form';
import { TbShield, TbWorld } from 'react-icons/tb';
import { addCollection } from '~/actions/collection/addCollection';
import { getUserId } from '~/utilities/user/getUserId';
import { useRouter } from 'next/navigation';

type Inputs = {
    name: string;
    private: boolean;
};

const CollectionForm = () => {
    const form = useForm<Inputs>();
    const router = useRouter()

    const handleSubmit = async (data: Inputs) => {
        const response = await addCollection({
            userId:  await getUserId(),
            name: data.name,
            private: data.private,
        } as any)


        if (!response.parentId) {
            router.push("/collections")
            return
        }

        // figure out how to handle nested collection TODO
        router.push('/')

    };

    return (
        <div className='card bg-base-200 '>
            <div className='card-body'>
                <Form.Root<Inputs> form={form} onSubmit={handleSubmit}>

                    <Form.Input
                        form={form}
                        fieldName='name'
                        label='Collection Name'
                        required
                        errorWarning='Required field, try again buddy'
                    />

                    <Form.Toggle
                        form={form}
                        fieldName='private'
                        label='Private'
                        useIcons={true}
                        enabledIcon={<TbShield />}
                        disabledIcon={<TbWorld />}
                    />

                    <Form.ActionButtons />

                </Form.Root>
            </div>
        </div>
    );
};

export default CollectionForm;



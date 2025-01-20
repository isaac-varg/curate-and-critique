'use client'

import { useForm } from "react-hook-form";
import { TbShield, TbWorld } from "react-icons/tb";
import { revalidate } from "~/actions/app/revalidate";
import { CollectionActions } from "~/actions/collection";
import { Collection } from "~/actions/collection/getCollections";
import { Form } from "~/components/form";
import { useToastActions } from "~/store/toastStore";

type Inputs = {
    name: string;
    privateCollection: boolean;
};


const BasicsPanel = ({ collection }: { collection: Collection }) => {

    const form = useForm<Inputs>({ defaultValues: collection })
    const { toast } = useToastActions()

    const handleSubmit = async (data: Inputs) => {
        const { name, privateCollection } = data
        await CollectionActions.update(collection.id, {
            name,
            private: privateCollection,
        });

        toast({ title: "Collection Updated", description: 'The collection data has successfully been modified', color: 'success' })
        revalidate(`/collections/${collection.name}/edit`)

    }


    return (
        <div className='card bg-base-200 '>
            <div className='card-body'>
                <div className="card-title">Basics</div>
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
                        fieldName='privateCollection'
                        label='Private'
                        useIcons={true}
                        enabledIcon={<TbShield />}
                        disabledIcon={<TbWorld />}
                    />

                    <Form.ActionButtons />

                </Form.Root>
            </div>
        </div>


    )
}

export default BasicsPanel

'use client'

import { useAppForm } from "@/components/form"
import { createCollection } from "../_actions/createCollection"
import { useRouter } from "next/navigation"

interface CollectionFormInputs {
  name: string
}
const CollectionForm = () => {

  const defaultCollection: CollectionFormInputs = {
    name: '',
  }

  const router = useRouter()

  const form = useAppForm({
    defaultValues: defaultCollection,
    onSubmit: async ({ value }) => {
      const response = await createCollection(value);
      router.push(`/collections/${response[0].name}/?collectionId=${response[0].id}`)

    }
  })

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit()
        }}
        className="flex flex-col gap-2"
      >
        <form.AppField
          name="name"
          children={(field) => <field.TextField label="Name" />}
        />

        <form.AppForm>
          <form.SubmitButton />
        </form.AppForm>

      </form>
    </div>


  )
}

export default CollectionForm

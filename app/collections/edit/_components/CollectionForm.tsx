'use client'

import { useAppForm } from "@/components/form"

interface CollectionFormInputs {
  name: string
}
const CollectionForm = () => {

  const defaultCollection: CollectionFormInputs = {
    name: '',
  }

  const form = useAppForm({
    defaultValues: defaultCollection,
    onSubmit: ({ value }) => {
      console.log(value);
    }
  })

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="name"
          children={(field) => <field.TextField label="n ame" />}
        />

        <form.AppForm>
          <form.SubmitButton />
        </form.AppForm>

      </form>
    </div>


  )
}

export default CollectionForm

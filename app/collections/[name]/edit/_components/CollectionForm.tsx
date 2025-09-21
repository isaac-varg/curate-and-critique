'use client'
import { collectionActions } from "@/actions/collections"
import { useAppForm } from "@/components/form"
import { Panel } from "@/components/panel"
import Title from "@/components/ui/text/Title"
import { Database } from "@/types/supabase.types"

interface CollectionFormInputs {
  name: string
}

const CollectionForm = ({ collection }: { collection: Database['public']['Tables']['collections']['Row'] }) => {

  const defaultCollection: CollectionFormInputs = {
    name: collection.name,
  }

  const form = useAppForm({
    defaultValues: defaultCollection,
    onSubmit: async ({ value }) => {
      const response = await collectionActions.update(collection.id, value);
      console.log(response)
    }
  })


  return (
    <div className="flex flex-col gap-2">
      <Title type="section">Basics</Title>

      <Panel.Root>
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
      </Panel.Root>
    </div>
  )
}

export default CollectionForm

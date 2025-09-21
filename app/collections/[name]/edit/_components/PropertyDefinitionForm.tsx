import { propertyDefinitionActions } from "@/actions/propertyDefinitions";
import { PropertyDefiniton } from "@/actions/propertyDefinitions/getAll";
import { useAppForm } from "@/components/form";
import { Panel } from "@/components/panel";
import { useRouter } from "next/navigation";

const PropertyDefinitionForm = ({ propertyDefinition }: { propertyDefinition: PropertyDefiniton }) => {

  const { name, is_required, property_group_id, data_type_id } = propertyDefinition;
  const router = useRouter()

  const defualtPropertyDefinition = {
    name, is_required, property_group_id, data_type_id
  }

  const form = useAppForm({
    defaultValues: defualtPropertyDefinition,
    onSubmit: async ({ value }) => {
      await propertyDefinitionActions.update(propertyDefinition.id, value);
      router.refresh();
    }
  })

  return (
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

  )
}

export default PropertyDefinitionForm

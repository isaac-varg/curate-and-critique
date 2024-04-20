import entryActions from "@/actions/entries/entryActions";
import { revalidatePage } from "@/actions/revalidatePage";
import Dialog from "@/components/dialog";
import Form from "@/components/form";
import { EntryType } from "@/types/EntryType";
import { createEntryDataFromForm } from "@/utilities/data/createEntryDataFromForm";
import { create } from "domain";
import { useForm } from "react-hook-form";

const EntryForm = ({ entryType }: { entryType: EntryType }) => {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
 
    const entryPaylod = {
      entryTypeId: entryType.id,
    };

    const { id } = await entryActions.create(entryPaylod);
    createEntryDataFromForm(id, data);

    revalidatePage('/collections/[name]');

  });

  return (
    <Dialog.Root identifier={entryType.id}>
      <Form.Root form={form} onSubmit={handleSubmit}>
        {entryType.entryProperties?.map((entryProperty) => (
          <Form.Text
            key={entryProperty.id}
            form={form}
            fieldName={entryProperty.id}
            label={entryProperty.name}
            required={entryProperty.required}
          />
        ))}
        <Form.ActionRow form={form} />
      </Form.Root>
    </Dialog.Root>
  );
};

export default EntryForm;

import Dialog from "@/components/dialog";
import Form from "@/components/form";
import { EntryType } from "@/types/EntryType";
import { useForm } from "react-hook-form";

const EntryForm = ({ entryType }: { entryType: EntryType }) => {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data);
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

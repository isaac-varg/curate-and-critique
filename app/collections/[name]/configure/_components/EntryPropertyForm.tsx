import entryPropertyActions from "@/actions/entryProperties/entryPropertyActions";
import { revalidatePage } from "@/actions/revalidatePage";
import Dialog from "@/components/dialog";
import Form from "@/components/form";
import { DialogContext } from "@/context/DialogContext";
import useDialog from "@/hooks/useDialog";
import { EntryProperty } from "@/types/EntryProperty";
import { EntryType } from "@/types/EntryType";
import { useContext } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  required: boolean;
};

type EntryPropertyFormProps = {
  entryType: EntryType;
};

const EntryPropertyForm = ({ entryType }: EntryPropertyFormProps) => {

  const form = useForm<Inputs>({
    defaultValues: {
      name: "",
      required: false,
    }
  });
  const { resetDialogContext } = useDialog();


  const handleSubmit = form.handleSubmit(async (data: Inputs) => {
    const createData = data as EntryProperty;

    if (!entryType.id) {
      return;
    }
    createData.entryTypeId = entryType?.id;

    entryPropertyActions.create(createData);
    revalidatePage('/collections/[name]/configure');
    resetDialogContext();

  });



  return (
    <Dialog.Root identifier={`propertyForm_${entryType.name}`}>
      <Dialog.Title >{entryType.name}/</Dialog.Title>
      <Form.Root form={form} onSubmit={handleSubmit}>
        <Form.Text form={form} label="Name" fieldName="name" required={true} />
        <Form.Switch form={form} label="Required" fieldName="required" />
        <Form.ActionRow form={form} />
      </Form.Root>
    </Dialog.Root>
  );
};

export default EntryPropertyForm;

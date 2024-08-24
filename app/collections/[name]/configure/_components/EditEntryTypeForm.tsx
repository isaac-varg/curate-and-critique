"use client";

import entryTypeActions from "@/actions/entryTypes/entryTypeActions";
import { revalidatePage } from "@/actions/revalidatePage";
import Dialog from "@/components/dialog";
import Form from "@/components/form";
import { SelectionContext } from "@/context/SelectionContext";
import useDialog from "@/hooks/useDialog";
import { EntryType } from "@/types/EntryType";
import { SelectOption } from "@/types/SelectOption";
import { useContext } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  aggregateId: string;
  pluralName: string;
};

type EntryTypeFormProps = {
  entryTypes: EntryType[];
  selectedEntryType: EntryType
};

const EditEntryTypeForm = ({ entryTypes, selectedEntryType }: EntryTypeFormProps) => {
  const hasOtherEntryTypes = entryTypes.length > 0;
  const form = useForm<Inputs>({ defaultValues: { name: selectedEntryType.name, aggregateId: selectedEntryType.aggregateId, pluralName: selectedEntryType.pluralName } });
  const { activeCollectionId } = useContext(SelectionContext);
  const { resetDialogContext } = useDialog()

  const entryTypeSelectOptions = entryTypes.map((entryType: EntryType) => ({
    label: entryType.name,
    value: entryType.id,
  })) as SelectOption[];
  
  entryTypeSelectOptions.splice(0, 0, {label: 'None', value: ''}) 


  const handleSubmit = form.handleSubmit(async (data: Inputs) => {

    const entryTypeData = {
      name: data.name,
      pluralName: data.pluralName,
      aggregateId: data.aggregateId ? data.aggregateId : null,
      collectionId: activeCollectionId,
    };

    await entryTypeActions.update(entryTypeData);
    await revalidatePage("/collections/[name]/configure");
    resetDialogContext()
  });

  return (
    <Dialog.Root identifier={`entryTypeForm_${selectedEntryType.id}`}>
      <Form.Root form={form} onSubmit={handleSubmit}>
        <Form.Text form={form} label="Name" fieldName="name" required={true} />
        <Form.Text form={form} label="Pluralized Name" fieldName="pluralName" required />
        {hasOtherEntryTypes && (
          <Form.Select
            form={form}
            fieldName="aggregateId"
            label="Parent"
            options={entryTypeSelectOptions}
          />
        )}
        <Form.ActionRow form={form} />
      </Form.Root>
    </Dialog.Root>
  );
};

export default EditEntryTypeForm;

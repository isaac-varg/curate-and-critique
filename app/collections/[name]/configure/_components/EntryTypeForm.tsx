"use client";

import entryTypeActions from "@/actions/entryTypes/entryTypeActions";
import { revalidatePage } from "@/actions/revalidatePage";
import Form from "@/components/form";
import { SelectionContext } from "@/context/SelectionContext";
import useDialog from "@/hooks/useDialog";
import { EntryType } from "@/types/EntryType";
import { SelectOption } from "@/types/SelectOption";
import { SelectItem } from "@radix-ui/react-select";
import { useContext } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  aggregateId: string;
  pluralName: string;
};

type EntryTypeFormProps = {
  entryTypes: EntryType[];
};

const EntryTypeForm = ({ entryTypes }: EntryTypeFormProps) => {
  const hasOtherEntryTypes = entryTypes.length > 0;
  const form = useForm<Inputs>();
  const { activeCollectionId } = useContext(SelectionContext);
  const { resetDialogContext } = useDialog()

  const entryTypeSelectOptions = entryTypes.map((entryType: EntryType) => ({
    label: entryType.name,
    value: entryType.id,
  })) as SelectOption[];

  
  
  const handleSubmit = form.handleSubmit(async (data: Inputs) => {
    const entryTypeData = {
      name: data.name,
      pluralName: data.pluralName,
      aggregateId: data.aggregateId,
      collectionId: activeCollectionId,
    };

    await entryTypeActions.create(entryTypeData);
    await revalidatePage("/collections/[name]/configure");
    resetDialogContext()
  });

  return (
    <Form.Root form={form} onSubmit={handleSubmit}>
      <Form.Text form={form} label="Name" fieldName="name" required={true} />
      <Form.Text form={form} label="Pluralized Name" fieldName="pluralName" />
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
  );
};

export default EntryTypeForm;

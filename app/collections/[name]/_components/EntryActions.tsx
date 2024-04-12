"use client";
import ActionButton from "@/components/ActionButton";
import Layout from "@/components/layout";
import useDialog from "@/hooks/useDialog";
import { EntryType } from "@/types/EntryType";
import React from "react";
import { TbPlus } from "react-icons/tb";
import EntryForm from "./EntryForm";

type EntryTypeActionsProps = {
  entryTypes: EntryType[];
};

const EntryTypeActions = ({ entryTypes }: EntryTypeActionsProps) => {
  const { showDialog } = useDialog();

  return (
    <>
      
      <Layout.Row justify="start">
        {entryTypes.map((entryType) => (
          <div key={entryType.id}>
          <EntryForm entryType={entryType}/>
          <ActionButton
            onClick={() => showDialog(entryType.id)}
            key={entryType.id}
          >
            <TbPlus /> {entryType.name}
          </ActionButton>
          </div>
        ))}
      </Layout.Row>
    </>
  );
};

export default EntryTypeActions;

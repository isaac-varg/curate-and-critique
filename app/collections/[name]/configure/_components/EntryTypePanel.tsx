import ActionButton from "@/components/ActionButton";
import Layout from "@/components/layout";
import Heading from "@/components/text/Heading";
import { EntryType } from "@/types/EntryType";
import React from "react";

type EntryTypePanelProps = {
  entryType: EntryType;
};

const EntryTypePanel = ({ entryType }: EntryTypePanelProps) => {
  return (
    <div className="p-6 border-norway-300 border-2 rounded-lg bg-norway-50">
      <Layout.Row>
      <h1 className="font-poppins text-3xl font-semibold text-norway-900">{entryType.name}</h1>
      <ActionButton>Edit</ActionButton>
      </Layout.Row>
      <h2 className="font-inter italic text-lg font-medium text-norway-700">{entryType.parent ? `Collects ${entryType.parent?.pluralName}` : ''}</h2>
    </div>
  );
};

export default EntryTypePanel;

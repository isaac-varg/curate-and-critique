"use client"
import ActionButton from "@/components/ActionButton";
import Layout from "@/components/layout";
import Heading from "@/components/text/Heading";
import { RiSettingsLine } from "react-icons/ri";
import { TbPlus } from "react-icons/tb";

import { EntryType } from "@/types/EntryType";
import React from "react";
import useDialog from "@/hooks/useDialog";
import EntryPropertyForm from "./EntryPropertyForm";
import PropertiesSubpanel from "./PropertiesSubpanel";

type EntryTypePanelProps = {
  entryType: EntryType;
};


const EntryTypePanel = ({ entryType }: EntryTypePanelProps) => {
  const { showDialog } = useDialog();

  return (
    <>
    <EntryPropertyForm entryType={entryType}/>


    
    <div className="p-6 border-norway-300 border-2 rounded-lg bg-norway-50">
      <Layout.Row>
        <h1 className="font-poppins text-3xl font-semibold text-norway-900">
          {entryType.name}
        </h1>
        <div className="flex gap-x-2">
          <ActionButton>
            <RiSettingsLine />
          </ActionButton>
          <ActionButton onClick={() => showDialog(`propertyForm_${entryType.name}`)}>
            <TbPlus />
          </ActionButton>
        </div>
      </Layout.Row>
      {entryType.children?.length > 0 ? 
      (<h2 className="font-inter italic text-lg font-medium text-norway-700">
        {`Collects ${entryType.children[0].pluralName}`}
      </h2>) : ""}

      {entryType.entryProperties && <PropertiesSubpanel properties={entryType.entryProperties as any} />}
    </div>




    </>

  );
};

export default EntryTypePanel;

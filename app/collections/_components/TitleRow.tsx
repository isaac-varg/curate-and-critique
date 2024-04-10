"use client";

import ActionButton from "@/components/ActionButton";
import Layout from "@/components/layout";
import Heading from "@/components/text/Heading";
import useDialog from "@/hooks/useDialog";
import { TbPlus } from "react-icons/tb";
import CollectionDialog from "./CollectionDialog";

const TitleRow = () => {
  const { showDialog } = useDialog();

  const handleAddCollectionClick = () => {
    showDialog("AddCollectionDialog");
  };

  return (
    <>
    <CollectionDialog />
    <Layout.Row>
      <Heading>Collections</Heading>
      <ActionButton onClick={handleAddCollectionClick}>
        <TbPlus />
        <div>Collection</div>
      </ActionButton>
    </Layout.Row>
    </>
  );
};

export default TitleRow;

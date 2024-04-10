"use client";
import ActionButton from "@/components/ActionButton";
import Layout from "@/components/layout";
import Heading from "@/components/text/Heading";
import useDialog from "@/hooks/useDialog";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { TbPlus } from "react-icons/tb";
import EntryTypeDialog from "./EntryTypeDialog";

type TitleRowProps = {
  title: string;
};

const TitleRow = ({ title }: TitleRowProps) => {
  const dialog = useDialog();

  const handleEntryTypeClick = () => {
    dialog.showDialog("EntryTypeDialog");
  };

  return (
    <>
      <Layout.Row>
        <Heading>{title}</Heading>
        <ActionButton onClick={handleEntryTypeClick}><TbPlus /><h1>Entry Type</h1></ActionButton>
      </Layout.Row>
    </>
  );
};

export default TitleRow;

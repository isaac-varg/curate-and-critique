"use client";
import ActionButton from "@/components/ActionButton";
import Layout from "@/components/layout";
import Heading from "@/components/text/Heading";
import useSelectionContext from "@/hooks/useSelectionContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { TbSettings2 } from "react-icons/tb";

type TitleRowProps = {
  title: string;
  collectionId: string;
};

const TitleRow = ({ title, collectionId }: TitleRowProps) => {
  const router = useRouter();
  const path = usePathname();
  const { setActiveCollection } = useSelectionContext();

  useEffect(() => {
    setActiveCollection(collectionId);
  }, [collectionId]);

  const handleConfigure = () => {
    router.push(`${path}/configure?id=${collectionId}`);
  };

  return (
    <>
      <Layout.Row>
        <Heading>{title}</Heading>
        <ActionButton onClick={handleConfigure}>
          <TbSettings2 className="text-2xl" />
          <div>Configure</div>
        </ActionButton>
      </Layout.Row>
    </>
  );
};

export default TitleRow;

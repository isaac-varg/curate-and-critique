"use client";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { TbHome } from "react-icons/tb";
import Link from "next/link";
import useSelectionContext from "@/hooks/useSelectionContext";
import { SelectionContext } from "@/context/SelectionContext";

const PageBreadcrumbs = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment !== "");
  const { setActiveCollection } = useSelectionContext();
  const {activeCollectionId} = useContext(SelectionContext)
  
  const pathParamters = activeCollectionId ? `?collection_id=${activeCollectionId}` : '';


  return (
    <div className="flex items-center space-x-2">
      <Link href="/" className="text-gray-500 hover:text-gray-700">
        <TbHome />
      </Link>
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-500">/</span>
          <Link
            href={`/${segments.slice(0, index + 1).join("/")}${pathParamters}`}
            className="text-gray-500 hover:text-gray-700"
          >
            {segment}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PageBreadcrumbs;

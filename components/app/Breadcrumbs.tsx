"use client";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { BiHomeHeart } from "react-icons/bi";
import { TbSlash } from "react-icons/tb";
import Link from "next/link";
import useSelectionContext from "@/hooks/useSelectionContext";
import { SelectionContext } from "@/context/SelectionContext";

const PageBreadcrumbs = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment !== "");
  const { setActiveCollection } = useSelectionContext();
  const { activeCollectionId } = useContext(SelectionContext)

  const pathParamters = activeCollectionId ? `?collection_id=${activeCollectionId}` : '';


  return (
    <div className="flex items-center space-x-2">
      <Link href="/" className="text-2xl text-gray-500 hover:text-gray-700">
          <BiHomeHeart />
      </Link>
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-500 text-xl "><TbSlash /></span>
          <Link
            href={`/${segments.slice(0, index + 1).join("/")}${pathParamters}`}
            className="text-gray-500 hover:text-gray-700 font-poppins font-semibold"
          >
            {segment}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PageBreadcrumbs;

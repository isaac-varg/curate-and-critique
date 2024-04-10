"use client"

import { Collection } from "@/types/Collection";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CollectionCard = ({ collection }: { collection: Collection }) => {

  const router = useRouter()

  const handleClick = () => {
    router.push(`/collections/${collection.name.toLowerCase()}?id=${collection.id}`)
  }

  return (
    <div onClick={handleClick} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:cursor-pointer flex">
      <div className="relative rounded-lg overflow-hidden w-full h-80 ">
        {collection.image && (
          <Image
            src={collection.image.url}
            alt={collection.name}
            fill
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-lavender-950 bg-opacity-50 p-4 flex items-center justify-center">
          <div className="text-white text-4xl font-bold font-poppins">
            {collection.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;


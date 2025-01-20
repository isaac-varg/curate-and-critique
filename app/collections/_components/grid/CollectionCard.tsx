"use client"

import { useRouter } from "next/navigation";
import { Collection } from "~/actions/collection/getCollections"

type CollectionCardProps = {
    collection: Collection;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
    
    const router = useRouter()

    const handleClick = () => {
       router.push(`/collections/${collection.name}?id=${collection.id}`) 
    }

    return (
        <div 
            onClick={handleClick} 
            className="card bg-linear-30 from-indigo-400 via-indigo-500 to-indigo-600 min-h-[200px] hover:cursor-pointer hover:from-indigo-500 hover:via-indigo-600 hover:to-indigo-700">
            <div className="card-body flex flex-col items-center justify-center">
                <div className="flex flex-col ">
                    <h1 className="font-bold text-3xl"> {collection.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard

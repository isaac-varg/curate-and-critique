'use client'
import { Database } from "@/types/supabase.types"
import { useRouter } from "next/navigation"

type Props = {
  collection: Database['public']['Tables']['collections']['Row']
}

const CollectionCard = ({ collection }: Props) => {

  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/collections/${collection.name}?collectionId=${collection.id}`)}
      className="card hover:bg-accent/35 hover:cursor-pointer bg-base-100 flex-col items-center justify-center">
      <div className="card-body">
        <h2 className="text-xl font-semibold">{collection.name}</h2>
      </div>

    </div>
  )
}

export default CollectionCard

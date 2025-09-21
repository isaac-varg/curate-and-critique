'use client'
import { useRouter } from "next/navigation"
import { TbEdit } from "react-icons/tb"

const ConfigurationButton = ({ collectionId, collectionName }: { collectionId: string, collectionName: string }) => {
  const router = useRouter()

  return (
    <button
      className="btn btn-outline btn-secondary"
      onClick={() => router.push(`/collections/${collectionName}/edit?collectionId=${collectionId}`)}
    >
      <TbEdit className="size-4" />
      Configure
    </button>
  )
}

export default ConfigurationButton

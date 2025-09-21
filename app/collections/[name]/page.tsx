import Title from "@/components/ui/text/Title"
import { getCollection } from "./_actions/getCollection"
import ConfigurationButton from "./_components/ConfigurationButton"

type CollectionPageProps = {
  searchParams: Promise<{ collectionId: string }>
}
const CollectionPage = async ({ searchParams }: CollectionPageProps) => {

  const collectionId = (await searchParams).collectionId
  const collection = await getCollection(collectionId);

  // show warning if property definitions is zero
  // show edit collection button
  // get collection items

  return (
    <div>
      <div className="flex justify-between items-center">
        <Title>{collection.name}</Title>

        <ConfigurationButton collectionId={collectionId} collectionName={collection.name} />

      </div>
    </div>
  )
}

export default CollectionPage

import { propertyDefinitionActions } from "@/actions/propertyDefinitions"
import { getCollection } from "../_actions/getCollection"
import CollectionForm from "./_components/CollectionForm"
import PropertyDefinitions from "./_components/PropertyDefinitions"
import { dataTypeActions } from "@/actions/dataTypes"

type EditCollectionProps = {
  searchParams: Promise<{ collectionId: string }>
}
const EditCollection = async ({ searchParams }: EditCollectionProps) => {
  const collectionId = (await searchParams).collectionId

  const [collection, propertyDefinitions] = await Promise.all([
    await getCollection(collectionId),
    await propertyDefinitionActions.getAll(collectionId)
  ])

  const dataTypes = await dataTypeActions.getAll();

  if (!collection || !propertyDefinitions) return false

  return (
    <div className="flex flex-col gap-y-6">

      <CollectionForm collection={collection} />

      <PropertyDefinitions propertyDefinitions={propertyDefinitions} collectionId={collection.id} />
    </div>
  )
}

export default EditCollection

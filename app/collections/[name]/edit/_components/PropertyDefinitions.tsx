'use client'

import { propertyDefinitionActions } from "@/actions/propertyDefinitions"
import { PropertyDefiniton } from "@/actions/propertyDefinitions/getAll"
import { Panel } from "@/components/panel"
import Title from "@/components/ui/text/Title"
import { useRouter } from "next/navigation"
import { TbPlus } from "react-icons/tb"
import PropertyDefinitionForm from "./PropertyDefinitionForm"

type Props = {
  propertyDefinitions: PropertyDefiniton[];
  collectionId: string,
}

const PropertyDefinitions = ({ propertyDefinitions, collectionId }: Props) => {

  const router = useRouter()

  const handleNew = async () => {
    await propertyDefinitionActions.create(collectionId);
    router.refresh()
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Title type="section">Property Definitions</Title>

        <button onClick={handleNew} className="btn btn-secondary"> <TbPlus className="size-5" /> </button>
      </div>


      {propertyDefinitions.map(pd => <PropertyDefinitionForm key={pd.id} propertyDefinition={pd} />)}




    </div>


  )
}

export default PropertyDefinitions

import React from 'react'
import { CollectionActions } from '~/actions/collection'
import { ServerComponentProps } from '~/types/ServerComponentProps'
import ConfigTitleBar from './_components/ConfigTitleBar'
import BasicsPanel from './_components/BasicsPanel'
import PropertiesPanel from './_components/PropertiesPanel'

const EditCollectionPage = async ({ searchParams }: ServerComponentProps) => {

    const collection = await CollectionActions.getOne(searchParams.id)

    return (
        <div className='flex flex-col gap-y-6'>
            <ConfigTitleBar collectionName={collection.name} />

            <BasicsPanel collection={collection} />

            <PropertiesPanel />
             
        </div>
    )
}

export default EditCollectionPage

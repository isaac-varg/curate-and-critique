import React from 'react'
import { getCollections } from '~/actions/collection/getCollections'
import NoCollections from './_components/NoCollections'
import CollectionsGrid from './_components/grid/CollectionsGrid'
import ActionsBar from './_components/ActionsBar'

const CollectionsPage = async () => {

    const collections = await getCollections()

    return (
        <div className='flex flex-col gap-y-4'>
            {collections.length === 0 && <NoCollections />}

            <ActionsBar />


            <CollectionsGrid collections={collections} />
        </div>
    )
}

export default CollectionsPage

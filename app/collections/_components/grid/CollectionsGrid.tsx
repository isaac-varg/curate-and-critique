import React from 'react'
import { Collection } from '~/actions/collection/getCollections'
import CollectionCard from './CollectionCard';

type CollectionsGridType = {
    collections: Collection[];
}

const CollectionsGrid = ({ collections }: CollectionsGridType) => {


    return (
        <div className='grid grid-cols-3 gap-4'>
            {collections.map((collection) => <CollectionCard collection={collection} />)}
        </div>
    )
}

export default CollectionsGrid

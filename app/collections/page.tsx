import React from 'react'
import { getCollections } from '~/actions/collection/getCollections'
import NoCollections from './_components/NoCollections'

const CollectionsPage = async () => {

    const collections = await getCollections()

    return (
        <>
            {collections.length === 0 && <NoCollections />}
        </>
    )
}

export default CollectionsPage

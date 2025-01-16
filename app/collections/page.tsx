import React from 'react'
import { getCollections } from './_functions/getCollections'
import Sad from '~/components/ui/reactions/Sad'

const CollectionsPage = async () => {

    const collections = await getCollections()



    return (
        <div className='w-full'>
            {collections.length === 0 && <Sad />}
        </div>
    )
}

export default CollectionsPage

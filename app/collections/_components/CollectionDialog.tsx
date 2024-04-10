import Dialog from '@/components/dialog'
import React from 'react'
import CollectionForm from './CollectionForm'

const CollectionDialog = () => {
  return (
    <Dialog.Root identifier='AddCollectionDialog'>
        <Dialog.Title title='Add Collection' />

        <CollectionForm />
        
    </Dialog.Root>
  )
}

export default CollectionDialog
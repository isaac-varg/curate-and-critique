import Dialog from '@/components/dialog'
import { EntryType } from '@/types/EntryType'
import React from 'react'
import EntryTypeForm from './EntryTypeForm'

type EntryTypeDialogProps = {
  entryTypes: EntryType[]
}

const EntryTypeDialog = ({ entryTypes } : EntryTypeDialogProps) => {
  return (
    <Dialog.Root identifier='EntryTypeDialog'>
        <Dialog.Title>New Entry Type</Dialog.Title>
        <EntryTypeForm entryTypes={entryTypes}/>
    </Dialog.Root>
  )
}

export default EntryTypeDialog
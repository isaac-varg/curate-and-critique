import { EntryProperty } from "./EntryProperty"

export interface EntryType {
    id: string
    collectionId: string
    aggregateId?: string
    name: string
    pluralName: string
    parent?: EntryType
    children: EntryType[]
    entryProperties?: EntryProperty[]
}
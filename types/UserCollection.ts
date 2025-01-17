import { getCollections } from "~/actions/collection/getCollections";

type UserCollectionsArray = Awaited<ReturnType<typeof getCollections>>

export type UserCollection = UserCollectionsArray[number]

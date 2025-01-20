"use server"

import { getUserId } from "~/actions/user/getUser"
import prisma from "~/lib/prisma"

export const getCollections = async () => {
    const userId = await getUserId()

    const collections = await prisma.collection.findMany({
        where: {
            userId,
        }
    })

    return collections;
}


// extract the inferred type
type CollectionsResponseType = Awaited<ReturnType<typeof getCollections>>;

export type Collection = CollectionsResponseType[number];


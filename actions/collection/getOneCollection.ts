"use server"

import { getUserId } from "~/actions/user/getUser"
import prisma from "~/lib/prisma"

export const getOneCollection = async ( collectionId: string ) => {
    const userId = await getUserId()

    const collections = await prisma.collection.findFirstOrThrow({
        where: {
            userId,
            id: collectionId, 
        },
        include: {
            parentCollection: true,
            collectionProperties: {
                include: {
                    propertyTypes: true
                }
            }
        }
    })

    return collections;
}

// extract the inferred type
export type ExSingleCollection = Awaited<ReturnType<typeof getOneCollection>>;






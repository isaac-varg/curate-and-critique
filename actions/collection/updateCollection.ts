"use server"

import { Prisma } from "@prisma/client"
import prisma from "~/lib/prisma"

export const updateCollection = async (collectionId: string, data: Prisma.CollectionUpdateInput) => {

    const response = await prisma.collection.update({
        where: {
            id: collectionId,
        },
        data,
    })

    return response
}

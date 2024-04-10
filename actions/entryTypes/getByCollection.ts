"use server"

import prisma from "@/lib/prisma"

export const getByCollection = async (collectionId: string) => {
    const entryTypes = await prisma.entryType.findMany({
        where: {
            collectionId
        }
    });

    return entryTypes;
}
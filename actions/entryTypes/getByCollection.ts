"use server"

import prisma from "@/lib/prisma"

export const getByCollection = async (collectionId: string) => {
    const entryTypes = await prisma.entryType.findMany({
        include: {
          parent: true,  
        },
        where: {
            collectionId
        }
    });

    return entryTypes;
}
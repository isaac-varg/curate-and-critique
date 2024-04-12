"use server"

import prisma from "@/lib/prisma"

export const getByCollection = async (collectionId: string) => {
    const entryTypes = await prisma.entryType.findMany({
        include: {
          parent: true,
          children: true,
          entryProperties: true
        },
        where: {
            collectionId
        }
    });

    return entryTypes;
}
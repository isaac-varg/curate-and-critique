"use server"

import { Prisma } from "@prisma/client"
import { revalidatePath } from "next/cache"
import prisma from "~/lib/prisma"

export const addCollection = async (data: Prisma.CollectionCreateInput) => {

    const response = await prisma.collection.create({
        data,
    })

    revalidatePath("/")

    return response;
}

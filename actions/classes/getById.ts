"use server"

import prismaInstance from "@/lib/prisma";

export const getById = async (model: string, id: string) => {
    const prisma = prismaInstance as any;

    const response = await prisma[model].findFirst({
        where: {
            id,
        }
    });
    return response;
};
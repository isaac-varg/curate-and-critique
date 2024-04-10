"use server"

import prismaInstance from "@/lib/prisma";

export const getAll = async (model: string) => {
    const prisma = prismaInstance as any;

    const response = await prisma[model].findMany();
    return response;
};
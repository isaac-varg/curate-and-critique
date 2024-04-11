"use server"

import prismaInstance from "@/lib/prisma";

export const getAllWithIncludes = async (model: string, includeModels: string[]) => {
    const prisma = prismaInstance as any;

    const include = includeModels.map((model) => {model: true});
    const response = await prisma[model].findMany({
        include,
    });
    return response;
};
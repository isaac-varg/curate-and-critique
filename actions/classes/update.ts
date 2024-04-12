"use server"

import prismaInstance from "@/lib/prisma";

export const create = async (model: string, data: any) => {
    const prisma = prismaInstance as any;
    
    const response = await prisma[model].update({
        where: {
            id: data.id,
        },
        data,
    });
    return response;
};
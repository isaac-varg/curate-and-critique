"use server"

import prismaInstance from "@/lib/prisma";

export const create = async (model: string, data: any) => {
    const prisma = prismaInstance as any;
    
    const response = await prisma[model].create({
        data,
    });
    return response;
};
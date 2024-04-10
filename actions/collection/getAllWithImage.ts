"use server"

import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth";
import userActions from "../user/user";

export const getAllWithImage = async () => {
    const user = await userActions.getOneByEmail();

    if (!user) {
        return;
    }
    
    const collections = await prisma.collection.findMany({
        where: {
            userId: user.id
        },
        include: {
            image: true
        }
    })
    return collections
    
    };
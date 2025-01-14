"use server";

import { auth } from "~/auth";
import prisma from "~/lib/prisma";

export const getUserId = async () => {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
        throw new Error("No session found");
    }

    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email: session.user.email,
        }
    });

    return user.id;
};

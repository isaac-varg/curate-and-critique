"use server"

import prisma from "~/lib/prisma";
import { getUserId } from "~/utilities/user/getUserId";

export const setTheme = async (theme: string) => {
    const userId = await getUserId();
    await prisma.userConfig.update({
        where: {
            userId,
        },
        data: {
            activeTheme: theme,
        }
    })
}

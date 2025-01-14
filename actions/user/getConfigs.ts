"use server"

import prisma from "~/lib/prisma"
import { getUserId } from "~/utilities/user/getUserId"

export const getConfigs = async ( ) => {
    const userId = await getUserId()    

    const userConfigs = await prisma.userConfig.findFirstOrThrow({
        where: {
            userId,
        }
    });

    return userConfigs;


}

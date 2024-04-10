"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const getOneByEmail = async () => {
  const session = await getServerSession();

  if (!session) {
    return;
  }

  const user = await prisma.user.findMany({
    where: {
      email: session.user.email,
    },
  });

  return user[0];
};

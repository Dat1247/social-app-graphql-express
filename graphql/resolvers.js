import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: () => {
      return prisma.users.findMany()
    },
    usertypes: () => {
      return prisma.usertypes.findMany()
    },
    viewmodes: () => {
      return prisma.viewmodes.findMany()
    },
  },
};
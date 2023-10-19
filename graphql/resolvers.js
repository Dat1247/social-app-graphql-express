import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: async(parent, args) => {
      return await prisma.users.findMany()
    },
    usertypes: async(parent, args) => {
      return await prisma.usertypes.findMany()
    },
    viewmodes: async(parent, args) => {
      return await prisma.viewmodes.findMany()
    },
  },
  user: {
    posts: async(parent, args) => {
      console.log({parent: parent, args: args})
      return await prisma.posts.findMany({
        where: {
          userID: parent.id
        }
      })
    },
  },
  // post: {

  // }
};
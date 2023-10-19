
export const typeDefs = `#graphql
  scalar JSON
  scalar JSONObject

  type user {
    id: ID!
    name: String,
    username: String,
    email: String,
    phoneNumber: String,
    password: String,
    avatar: String,
    userType: String,
    createdAt: String,
    updatedAt: String,
    posts: [post]
  }

  type usertype {
    id: ID!,
    value: String,
    name: String
  }

  type viewmode {
    id: ID!,
    value: String,
    description: String
  }

  type post {
    id: ID!,
    userID: String,
    content: String,
    viewMode: String,
    fileUpload: JSON,
    createdAt: String,
    updatedAt: String
  }

  type Query {
    usertypes: [usertype],
    viewmodes: [viewmode],
    users: [user],
    posts: [post]
  }
`;
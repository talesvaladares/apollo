import { gql } from 'apollo-server-core';

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFiltersInput): [User!]!
  }

  # tipagem do graphql de usuarios
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
    posts: [Post!]!
  }
`;

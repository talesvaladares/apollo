import { gql } from 'apollo-server-core';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typeDefs';
import { postTypeDefs } from './post/typeDefs';
import { postResolvers } from './post/resolvers';
import { apiFiltersTypeDefs } from './api-filters/typedefs';
import { apiFiltersResolvers } from './api-filters/resolvers';

const rootTypesDefs = gql`
  type Query {
    _root: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _root: () => true,
  },
};

export const typeDefs = [rootTypesDefs, userTypeDefs, postTypeDefs, apiFiltersTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers, apiFiltersResolvers];

import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInputType,
} from 'graphql';

import User from './User';
import Friends from './Friends';

const data = {
  'id-1': { name: 'wei.gao' ,id: 'id-1', desc1: "Hello wei.gao" },
  'id-2': { name: 'jamie.wu',id: 'id-2', desc1: "Hello Jamie Wu" },
};

const currentUserQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    current: {
      type: User,
      args: { id: { type: GraphQLID }},
      resolve: (_, {id}) => {
        return data[id]
      },
    },
    friends: {
      type: new GraphQLList(User),
      resolve: () => {
        return [
            { name: 'wei.gao',id: 'id-1', desc1: "Hello wei.gao" },
            { name: 'jamie.wu',id: 'id-2', desc1: "Hello Jamie Wu" },
          ]
      }
    },
  }
});

const Schema = new GraphQLSchema({
  query: currentUserQuery
});

export default Schema;
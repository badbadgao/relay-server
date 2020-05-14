import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import User from './User';

const Friends = new GraphQLObjectType({
  name: 'Friends',
  fields: {
    friends: {
      type: new GraphQLList(User)
    }
  }
});

export default Friends;
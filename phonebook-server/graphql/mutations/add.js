var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
//var GraphQLInteger = require('graphql').GraphQLInteger;
var UserType = require('../types/user');
var services = require('../../services');

exports.add = {
  type: UserType.userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    nama: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return services.createUser(params);
  }
}
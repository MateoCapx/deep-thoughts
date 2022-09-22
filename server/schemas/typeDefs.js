//Type definitions: Type definitions, or TypeDefs for short, 
//involves literally defining every piece of data that the client can expect 
//to work with through a query or mutation

// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

// export the typeDefs
module.exports = typeDefs;
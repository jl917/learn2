const express = require('express');
const https = require('https');
const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Lang{
    a:String
  }
  
  type Query {
    hello: Shouji
  }

  enum Shouji{
    DAO
    Lang
  }
`;
const resolvers = {
  Query: {
    hello: (obj, args, context, info) => {
      console.log(obj)
      console.log(args)
      console.log(context)
      console.log(info)
      return 'Lang'
    }
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

const options = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.cert'),
  requestCert: false,
  rejectUnauthorized: false,
};

const app = express();
server.applyMiddleware({ app });
const httpsServer = https.createServer(options, app);

httpsServer.listen(443);

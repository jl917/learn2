const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { importSchema } from 'graphql-import'


import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://daolang:daolang@daolang-ndyib.mongodb.net/test?retryWrites=true&w=majority")
.then(() => console.log('몽구스 연결 성공'))
.catch((err) => console.log(err))

const Book = mongoose.model("book",{title:String,author:String})
 
const typeDefs = importSchema('./schema/index.graphql')
console.log(typeDefs)
 
/* 
const books = [
    {title:'js',author:'seoul'},
    {title:'react',author:'seoul'},
    {title:'html',author:'tokyo'},
    {title:'css',author:'beijing'}
]
*/
// Construct a schema, using GraphQL schema language
/*
const typeDefs = gql`
  type Query {
    books : [Book]
    findbook(name:String): [Book]
    hello : String
  }
  type Book{
      _id: String
      title: String
      author: String
  }
  type Mutation{
      addBook(title:String,author:String):Book
      removeBook(title:String):Book
  }
`;
*/
 //console.log(typeDefs)
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    books: async (obj,args,ctx) => await ctx.books.find({},(err,doc) => {
      console.log(doc)
    }),
    findbook: async (obj,args,ctx) => await ctx.books.find({author:args.name}),
    hello: () => 'hello'
  },
  Mutation:{
      addBook:async (obj,args,ctx) => {
          console.log(obj)
          console.log(args)
          console.log(ctx)
          await new ctx.books(args).save()
          return "등록 완료"
      },
      removeBook:async(obj,args,ctx) => {
        return await ctx.books.deleteMany({title:args.title}, (err,doc) => {
          if(err){
            return console.log(err)
          }
          console.log(doc)

        })
      }
  }
};
 
const server = new ApolloServer({ typeDefs, resolvers, context: {books:Book} });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
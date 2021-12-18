import React,{Component,Fragment,useState,useReducer} from 'react'
import {render} from 'react-dom'
import { ApolloProvider,Query ,graphql} from "react-apollo";
import ApolloClient,{gql} from "apollo-boost";

import Dialog from './component/dropDialog'

import List from './component/List'


const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

let dataSource = [];

const columns = [
  {
    title: '작가',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '책',
    dataIndex: 'title',
    key: 'title',
  },
];
let listOption = {
  columns,
  dataSource,
}




const App = (props) => {  
  console.log(props)
    if(props.data.loading) return <p>loading...</p>
    if(props.data.error) return <p>error...</p>

    props.data.books.forEach(e => {
      dataSource.push({
        key:e._id,
        author:e.author,
        title:e.title,
      })
    })
    
    return <div>
      <Dialog />
      <List {...Object.assign(listOption)} />
    </div>
  
}

const AppQuery = gql`{
  books{
    _id
    title
    author
  }
}`

const AppWithRead = graphql(AppQuery,{
  options: {
    variables:{a:1,b:2},
  },
})(App)



render(<ApolloProvider client={client}><AppWithRead /></ApolloProvider>,document.getElementById('app'))
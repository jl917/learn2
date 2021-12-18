import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { graphql,compose } from "react-apollo";
import gql from "graphql-tag"


const addBook = gql`
mutation addBook($title:String!,$author:String!){
  addBook(title:$title,author:$author){
    title
    author
  }
}
`

const removeBook = gql`
mutation removeBook($title:String!){
  removeBook(title:$title){
    title
    author
  }
}
`

class FormDialog extends Component{
  constructor(props) {
    super(props)
    this.state = {
      setOpen: false
    }

    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    
    
  }

  handleClickOpen() {
    this.setState({
      setOpen: true
    });
  }

  handleClose() {
    this.setState({
      setOpen: false
    });
  }

  handleAdd() {
    
    this.props.ab({
      variables: { title: document.querySelector('[name=b]').value,author: document.querySelector('[name=a]').value}
    })
      .then(({ data }) => {
        this.setState({setOpen: false},()=> {
          setTimeout(()=>window.location.href="/", 1000)
        })
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
    //setOpen(false);
  }


  render(){
    console.log(this)
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>+</Button>
        <Dialog open={this.state.setOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">북플러스</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              label="author"
              fullWidth
              name="a"
            />
            <TextField
              label="title"
              fullWidth
              name="b"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleAdd} color="primary">추가</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
}

export default compose(
  graphql(addBook,{name:'ab'}),
  graphql(removeBook,{name:'rb'})
)(FormDialog)
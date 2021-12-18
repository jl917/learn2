// @flow

import React,{Component} from "react"
import TodoAdd from "./TodoAdd"
import TodoList from "./TodoList"

type Props = {};
type State = {};

class App extends Component<Props,State>{
    render(){
        console.log(this)
        return <div className="wrap">
            <TodoAdd />
            <TodoList />
        </div>
    } 
}

export default App
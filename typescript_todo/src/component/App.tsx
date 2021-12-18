import * as React from "react"
import {Component} from "react"
import {TodoAdd} from "./TodoAdd"
import {TodoList} from "./TodoList"

interface props{
}
interface state{}

export class App extends Component<props,state>{
    render(){
        console.log(this)
        return <div className="wrap">
            <TodoAdd />
            <TodoList />
        </div>
    }
}
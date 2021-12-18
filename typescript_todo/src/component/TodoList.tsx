import * as React from "react"
import {Component} from "react"

import {TodoItem} from './TodoItem'
import './todoList.styl'

interface props{}
interface state{}

export class TodoList extends Component<props,state>{
    constructor(props:props){
        super(props)
    }

    render(){
        return <ul className='todo_list'>
            <TodoItem />
            <TodoItem />
        </ul>
    }
}


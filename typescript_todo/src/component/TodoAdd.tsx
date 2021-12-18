import * as React from "react"
import {Component} from "react"
import './todoAdd.styl'

interface props{}
interface state{}

export class TodoAdd extends Component<props,state>{
    render(){
        return <div className="input_area">
            <input type="text" />
            <button className="btn_add">+</button>
        </div>
    }
}
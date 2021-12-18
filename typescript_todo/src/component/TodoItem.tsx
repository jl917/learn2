import * as React from "react"
import {Component} from "react"
import './todoItem.styl'

interface props{}
interface state{
    checked: boolean;
}

export class TodoItem extends Component<props,state>{
    constructor(props:props){
        super(props)
        this.state = {
            checked:false
        };
    }

    render(){
        let {checked} = this.state
        return <li className={checked ? 'checked' : ''}>
                <span className="cb" onClick={() => this.setState({
                    checked:!checked
                })}></span>
                <b className="tit">sfasdf</b>
            </li>
    }
}
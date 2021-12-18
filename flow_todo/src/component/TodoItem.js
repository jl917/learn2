// @flow 
import React,{Component} from "react"
import './todoItem.styl'


type Props = {
    text:string,
};
type State = {
    checked: boolean,
};

class TodoItem extends Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state = {
            checked:false
        };
    }

    render(){
        let {checked} = this.state
        let {text} = this.props
        return <li className={checked ? 'checked' : ''}>
                <span className="cb" onClick={() => this.setState({
                    checked:!checked
                })}></span>
                <b className="tit">{text}</b>
            </li>
    }
}

export default TodoItem
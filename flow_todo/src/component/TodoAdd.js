
import './todoAdd.styl'
import React,{Component} from "react"
import {connect} from 'react-redux'
import {addTodo} from './redux'


type Props = {
    addTodo(txt:string):void
};
type State = {};

class TodoAdd extends Component<Props,State>{

    addTodo(txt:string){
        let ele = document.getElementById('todo_input_text')
        this.props.addTodo(ele.value)
        ele.value = ''
    }

    render(){
        return <div className="input_area">
            <input type="text" id="todo_input_text" />
            <button className="btn_add" onClick={() => this.addTodo('aaa')}>+</button>
        </div>
    }
}

const mapStateToProps = state => ({
    todoList: state.todoList,
    //state: state.commonState
})
const mapDispatchToProps = (dispatch) => ({
    addTodo: txt => {
        dispatch(addTodo(txt))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoAdd)
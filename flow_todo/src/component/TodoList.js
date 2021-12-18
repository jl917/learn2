// @flow
import React,{Component} from "react"
import {connect} from 'react-redux'
import { Spring, animated } from 'react-spring/renderprops'

import TodoItem from './TodoItem'
import {getTodoList} from './redux'
import './todoList.styl'


type Props = {
    getTodoList():void,
    todoList:Array<string>
};
type State = {};


class TodoList extends Component<Props,State>{
    constructor(props:Props){
        super(props)
    }

    render(){
        let {todoList} = this.props
        console.log(this.props)
        return <Spring
            native
            force
            config={{ tension: 2000, friction: 100, precision: 1 }}
        >
            {props => (
              <animated.ul className="todo_list" style={props}>
                {
                todoList && todoList.length!=0 ? 
                todoList.map((e,i) => <TodoItem text={e} key={i} />) : ''
            }
              </animated.ul>
            )}
          </Spring>

    }
}


const mapStateToProps = state => ({
    todoList: state.todoList,
    //state: state.commonState
})
const mapDispatchToProps = (dispatch) => ({
    getTodoList: query => {
        dispatch(getTodoList(query))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
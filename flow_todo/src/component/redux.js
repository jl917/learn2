import { createAction,createActions, handleAction,handleActions } from 'redux-actions'

const getStroageTodoList = () => localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []

export const getTodoList = createAction('GET_TODO_LIST')
export const addTodo = createAction('ADD_TODO')

export const todoListReducer = handleActions(
    {
        GET_TODO_LIST: (state,action) => {
            return state
        },
        ADD_TODO: (state,action) => {
            let list = [action.payload,...state]
            localStorage.setItem('todoList',JSON.stringify(list))
            return list
        }
    },
    getStroageTodoList()
);


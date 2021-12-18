import React from "react"
import {render} from "react-dom"
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'

import App from './component/App'
import './common/style.styl'
import {todoListReducer} from './component/redux' 

let app = combineReducers({
    todoList: todoListReducer,
})

const store = createStore(
    app,
    applyMiddleware(thunkMiddleware,promiseMiddleware)
);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)
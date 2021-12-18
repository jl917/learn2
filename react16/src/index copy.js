import React,{Component,Fragment,useState,useReducer} from 'react'
import {render} from 'react-dom'

//Object
let App_object = () => {
    const [person,setPerson] = useState({
        name:'dao',
        age:13
    })
    return <Fragment>
        <button onClick={(e)=> setPerson(prevState => ({...prevState,age:person.age+1})) } >toggle</button>
        <div>{person.age}</div>
    </Fragment>
}

//Array
let i = 1
let App_array = () => {
    const [todoList,setTodoList] = useState([])

    const addTodo = async () => {
        
        await setTodoList(preState => [
            ...preState,{
                id:new Date().getTime(),
                text:i
            }
        ])
        i++
    }

    return <Fragment>
        <div><button onClick={()=>addTodo()} >add</button></div>
        {
            todoList.map((e,i) => <li key={e.id}>{e.text}</li>)
        }
    </Fragment>
}

//Reducer
const initState = {count:0}
let reducer = (state,action) => {
    console.log(action)
    return action.type == 'increment' ? {count:state.count+1} : {count:state.count-1}
}

let AppReducer = () =>{
    const [state,dispatch] = useReducer(reducer, initState)
    return <div>
        <div>Count: {state.count}</div>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
}





const ThemeContext = React.createContext({
    a:1,
    b:2
});

class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value={{a:3,b:4}}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。

  
  static contextType = ThemeContext;
  render() {
    console.log(this.context)
    return <button theme={this.context} />;
  }
}


render(<App />,document.getElementById('app'))

/*
useCallback
useContext
useDebugValue
useEffect
useImperativeHandle
useLayoutEffect
useMemo
useReducer
useRef
useState
*/

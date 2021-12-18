import React,{Component,Fragment,useState,useReducer,unstable_Profiler as Profiler} from 'react'
import {render} from 'react-dom'

// for(let i in React){
//   console.log(i)
// }

function callback(a){
  console.log(a)
}

const App = () => <Profiler id="da" onRender={(...rest) => callback(rest)}><div>123</div></Profiler>
//const App = () => <div>123</div>


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

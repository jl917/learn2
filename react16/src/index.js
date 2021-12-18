import React, { Component, Fragment, useState, useEffect, useMemo, useCallback } from 'react'
import { render } from 'react-dom'


// const App = () => {

//   const [count,setCount] = useState(0)
//   const [uid,setUid] = useState(0)

//   useEffect(() => {
//     console.log(123)
//     setCount(count+1)
//   },[uid])

//   const bc = () => {
//     setUid(new Date().getTime())
//   }

//   return <div>
//     <div>{count}</div>
//     <div><button onClick={bc}>클릭</button></div>
//   </div>
// }

const App = () => {
  const [count, setCount] = useState(0);
  const [nowtime, setNowtime] = useState(0);

  const getSum = () => {
    return ((1 + count) * count) / 2 + ' , ' + Math.random()
  };

  const gs = () => {
    return ((1 + count) * count) / 2 + ' , ' + Math.random()
  }

  const sum = useMemo(getSum, [count]);
  const sum2 = useCallback(gs, [count]);

  return <div>
    <p> count: {count}</p>
    <p> sum: {sum}</p>
    <p>sum2: {sum2()}</p>
    <p> nowtime: {nowtime}</p>
    <button onClick={() => setCount(count + 1)} > add 1 </button>
    <button onClick={() => setNowtime(Date.now())}> set now time </button>
  </div>
}


render(<App />, document.getElementById('app'))

/*
useContext
useDebugValue

useImperativeHandle
useLayoutEffect

useReducer
useRef

useState -
useEffect
useMemo
useCallback
*/

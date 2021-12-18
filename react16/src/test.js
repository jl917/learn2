import React, { useState, useReducer, useEffect, Fragment, useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'

const List = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div>123</div>
    </Fragment>
  )
}


const aprop = {a:'1',b:'2'}
const App = () => (
  <List {...aprop} />
)

ReactDOM.render(<App />, document.getElementById('app'))

import * as React from "react";
import {add} from "./redux"
import {connect} from "react-redux"

// interface 
interface comProps {
  id: string
}
interface AppProps extends comProps {
  title: string;
  age: number;
  data: number;
  add(): void;
}

const App = (props: AppProps) => {
  console.log(props)
  return <div>
    <h1>{props.data}</h1>
    <div onClick={props.add}>+++++++++</div>
  </div>
}

const map_stp = (state:number) => ({
  data: state
})
const map_dtp = (dispatch:Function) => ({
  add: () => {
    dispatch(add())
  }
})

export default connect(map_stp,map_dtp)(App)
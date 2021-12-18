import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios"

const { useState, useEffect, Component } = React

const arr: TodoItem[] = [
  {
    text: "shanghai",
    id: 1
  },
  {
    text: "beijing",
    id: 2
  }
]

interface TodoItem {
  text: string;
  id: number
}

interface AppProps {
  todoList: TodoItem[]
}

interface User {
  title: string;
  first: string;
}

// let asyncData: boolean = true;
const App = (props: AppProps) => {
  const a = (): void => {
    // console.log(123)
  }
  const [count, setCount] = useState<number>(0);
  const [asyncUser, setAsyncUser] = useState<User>({ title: '', first: '' });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: 'get',
        url: 'https://randomuser.me/api/'
      })
        .then(
          res => {
            const { title, first } = res.data.results[0].name
            return { title, first }
          })
      setAsyncUser(result)
    }
    fetchData()
  }, [])

  const addCount = (): void => {
    setCount(count + 1)
  }

  return <div>
    <h1 onClick={addCount}>{count}</h1>
    {
      props.todoList.map((e: TodoItem) => <div onClick={a} key={e.id}>{e.text} - {e.id}</div>)
    }
    {
      asyncUser.title === '' ? <div>로딩</div> : <dl><dt>{asyncUser.title}</dt><dd>{asyncUser.first}</dd></dl>
    }
  </div>
}

class App2 extends Component<{ title: string;age:number }, { title: string }>{

  static defaultProps = {
    age: 13
  }
  constructor(props: { title: string;age:number }) {
    super(props)
    this.state = {
      title: '컴포넌트'
    }
  }
  render() {
    return (
      <div>{this.props.title} 리액트 class {this.state.title}</div>
    )
  }
}

const App3:React.SFC<{title:string}> = (props) => <div>{props.title}</div>

ReactDOM.render(
  <div>
    <App3 title="sfc 컴포넌트" />
    <App2 title="타입스크립트" />
    <App todoList={arr} />
  </div>,
  document.getElementById("app")
);
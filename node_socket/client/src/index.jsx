import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { render } from 'react-dom';
import io from "socket.io-client"

const socket = io('ws://localhost:8001/');

const App = () => {
  const [sendValue, setSendValue] = useState(null)
  useEffect(() => {
    
    socket.on('receiveMsg', function (data) {
      console.log('客户端接收服务器发送的消息', data)
    })
  }, [])

  const sendMessage = () => {
    socket.emit('sendMsg', { name: 'abc' })
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <p className="title">J聊天室</p>
      <input type="text" onChange={() => setSendValue(123)} />
      <button type="button" onClick={sendMessage}>send</button>
      <div><button type="button" onClick={() => socket.close()}>close</button></div>
    </div>
  )
};

render(<App />, document.getElementById('app'));

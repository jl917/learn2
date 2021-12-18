var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(8001);

// 监视客户端与服务器的连接
io.on('connection', function (socket) {
  console.log('有一个客户端连接上了服务器')

  // 绑定监听, 接收客户端发送的消息
  socket.on('sendMsg', function (data) {
    console.log('client to server', data)
    // 处理数据
    data.name = data.name.toUpperCase()
    // 服务器向客户端发送消息
    io.emit('receiveMsg', data)
    console.log('server to client', data)
  })

  socket.on('disconnect', function () {
    // socket 关闭
    console.log('-1')
  });
})

io.on('agentStateChanged', function (data) {
  console.log(data)
})
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http,{
  origins:['localhost:8080'],
  cookie:true,
  path:'/socket'
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log(socket.id)
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
var app = require('express')();
const cors = require("cors")
app.use(cors())
var http = require('http').Server(app);
var io = require('socket.io')(http);
const parse = require("url-parse")

const getRoom = url => parse(url).pathname.split("/")[1]

const msgParse = msg => msg.split(/ *d */)

const randint = (start, end) => parseInt(start + Math.random() * (end - start))

const dice = (faces, times) => (new Array(times)).fill(0).map(e => randint(0, faces) + 1)

const sum = arr => arr.reduce((a, b) => a + b)

io.on('connection', function(socket){
  const room = getRoom(socket.handshake.headers.referer)
  console.log('a user connected to room '+room);
  socket.join(room)

  socket.on("dice", msg => {
      
      let parsed = msgParse(msg).map(Number)
      if(parsed.length === 2){
          const res = dice(...parsed)
          const total = sum(res)
          str = JSON.stringify({
            res, total
        })
          io.in(room).emit("res", str)
      }
  })
});

http.listen(2019, function(){
  console.log('listening on *:2019');
});

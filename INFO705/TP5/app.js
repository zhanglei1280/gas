var app = require('express')();
const cors = require("cors")
app.use(cors())
var http = require('http').Server(app);
var io = require('socket.io')(http);

var compter = 0

io.on("connection", socket => {
    console.log("connected")

    socket.on("compter", step => {
        compter += step
        console.log(compter)
        io.emit("compter", compter)
    })

    socket.on("reset", () => {
        compter = 0
        io.emit("compter", compter)
    })
})

http.listen(3000)

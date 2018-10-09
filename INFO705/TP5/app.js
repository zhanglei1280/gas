var app = require('express')();
const cors = require("cors")
app.use(cors())
var http = require('http').Server(app);
var io = require('socket.io')(http);
var uuid = require("uuid")
const {remove} = require("lodash")
const xss = require("xss")

var compter = 0
var text = ""
var users = []


io.on("connection", socket => {
    console.log("connected")
    const uid = uuid()
    users.push(uid)
    io.emit("text", text)
    io.emit("users", users)
    socket.on("read", () => {
        io.emit("text", text)
    })

    socket.on("write", value => {
        text = xss(value)
        io.emit("text", text)
    })

    socket.on("users", () => {
        io.emit("users", users)
    })

    socket.on("compter", step => {
        compter += step
        console.log(compter)
        io.emit("compter", compter)
    })

    socket.on("reset", () => {
        compter = 0
        io.emit("compter", compter)
    })

    socket.on("disconnect", () => {
        remove(users, n => n === uid)
        io.emit("users", users)
    })
})

http.listen(3000)

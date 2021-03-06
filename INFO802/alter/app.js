const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const Coordinate = require("./Coordinate")
const search = require("./search")
const path = require("path")

const build = path.join(__dirname, "build")

var app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/journey", (req, res) => {
    const {source, dest, time, till} = req.body
    const date = new Date(time)
    console.log(source, dest, time, date)
    search(source, dest, date)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.status(400).send(err)
        })
})

app.get("/distance", (req, res) => {
    const {x1, y1, x2, y2} = req.body
    console.log(req.body)
    const p1 = new Coordinate(x1, y1)
    const p2 = new Coordinate(x2, y2)
    res.send({distance: p1.distance(p2)})
})

app.get("/price/:distance", (req, res) => {
    const {distance} = req.params
    res.send({
        price: distance / 9.8 * 2
    })
})

app.use(express.static(build))
app.get("*", (req, res) => {
    res.sendFile(path.join(build, "index.html"))
})

app.listen(20191)

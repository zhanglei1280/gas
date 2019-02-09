const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const Coordinate = require("./Coordinate")

var app = express()
app.use(cors())
app.unsubscribe(bodyParser.json())

app.post("/distance", (req, res) => {
    console.log("dfsfds")
    const {x1, y1, x2, y2} = req.body
    console.log(req.body)
    const p1 = new Coordinate(x1, y1)
    const p2 = new Coordinate(x2, y2)
    res.send([{distance: p1.distance(p2)}])
})



app.listen(20191)

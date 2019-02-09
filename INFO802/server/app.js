const express = require("express")
const cors = require("cors")
const fs = require("fs")
const soap = require('soap')

const Coordinate = require("./Coordinate")

var app = express()
app.use(cors())

const getDistance = (x1, y1, x2, y2) => {
    const p1 = new Coordinate(x1, y1)
    const p2 = new Coordinate(x2, y2)
    return p1.distance(p2)
}

const myService = {
    HelloWorldService: {
        HelloWorldPort: {
            getDistance: (x1, y1, x2, y2) => ({
                distance: getDistance(x1, y1, x2, y2)
            })
        }
    }
}

const xml = fs.readFileSync("./Distance.xml", "utf-8")

app.listen(20191, () => {
    soap.listen(app, "/Distance", myService, xml)
})

module.export = app

const express = require("express")
const cors = require("cors")

const {
    episodeList,
    getCommentByID
} = require("./comment")

var app = express()
app.use(cors())

app.get("/list/:anime/:episode", (req, res) => {
    const {
        anime,
        episode
    } = req.params
    episodeList(anime, episode)
        .then(response => {
            res.send(response.body)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

app.get("/comment/:eid", (req, res) => {
    const {
        eid
    } = req.params
    getCommentByID(eid)
        .then(response => {
            res.send(response.body)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

app.listen(20193)

module.exports = app

const fs = require("fs")
const {
    remove, trim
} = require("lodash")

const {CHOtoCHNO} = require("./utils")
const {oneCycle} = require("./tp2")

const isCHNO = graph => {
    CHOtoCHNO(graph)
    return oneCycle(graph)
}

const readGraph = pathFile => new Promise((resolve, reject) => {
    fs.readFile(pathFile, (err, data) => {
        if(err) reject(err)
        else resolve(data.toString())
    })
})

const parseGraph = data => {
    // ensure Graph{...}
    if(!/^Graph{[^}]+}/.test(data)){
        return Promise.reject("not proper graph format.")
    }
    data = data.replace(/^Graph{\n*/, "").replace(/}.*/, "").split("\n")
    remove(data, e => e.length < 1)
    const links = remove(data, e => /-/.test(e)).map(e => e.split(/ *- */))
    const points = trim(data[0]).split(/ +/g)
    const graph = {points, links: [...links]}
    if(!isCHNO(graph)){
        return Promise.reject("not CHNO")
    }
    return {
        points, links
    }
}

const parser = path => readGraph(path).then(parseGraph)

module.exports = parser

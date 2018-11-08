const fs = require("fs")
const {
    remove, trim
} = require("lodash")



const readGraph = path => new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
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
    return {
        points, links
    }
}

const parser = path => readGraph(path).then(parseGraph)

module.exports = parser

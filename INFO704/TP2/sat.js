const parser = require("./src/3SATParser")
const reducer = require("./src/tp3")

const satPath = process.argv[2] || "./instances/3SAT_vrai.txt"
const mode = process.argv[3] || "graph"

parser(satPath)
    .then(graph => {
        switch(mode){
            case "graph":
                console.log(graph)
                break
            case "reduce":
                reducer(graph)
                break
            default:
                break
        }
    })

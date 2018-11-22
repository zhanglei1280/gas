const parser = require("./src/grapheParser")
const {
    CHOtoCHNO
} = require("./src/utils")
const {
    genereEtTeste,
    solvBackTracking
} = require("./src/tp2")

const graphPath = process.argv[2] || "./instances/chno_vrai_1.txt"
const mode = process.argv[3] || ""

parser(graphPath)
    .then(graph => {
        CHOtoCHNO(graph)
        console.log(graph)
        switch(mode){
            case "q2":
                genereEtTeste(graph)
                break
            case "q3":
                solvBackTracking(graph)
            default:
                break
        }
    }).catch(err => {
        console.log(err)
    })
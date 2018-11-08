const parser = require("./grapheParser")
const {
    CHOtoCHNO,
    isUniq,
    isSameElement,
    isSubset,
    reduceCycle,
    allSubsets
} = require("./utils")

const verifierCertificat = (graph, cycle) => {
    // once
    if(!isUniq(cycle)) return false
    // all
    if(!isSameElement(cycle, graph.points)) return false
    // passage existence
    return isSubset(reduceCycle(cycle), graph.links)
}

const genereEtTeste = graph => {
    const cycles = allSubsets(graph.points)
    cycles.forEach(e => {
        let res = verifierCertificat(graph, e)
        console.log(e, res)
    })
}

parser("./chno.txt")
    .then(graph => {
        CHOtoCHNO(graph)
        //console.log(graph)
        genereEtTeste(graph)
    }).catch(err => {
        console.log(err)
    })

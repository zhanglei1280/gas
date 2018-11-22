const fs = require("fs")
const {
    remove,
    uniq
} = require("lodash")

const read3SAT = pathFile => new Promise((resolve, reject) => {
    fs.readFile(pathFile, (err, data) => {
        if (err) reject(err)
        else resolve(data.toString())
    })
})

const abs = n => {
    n = parseInt(n)
    if (n >= 0) return JSON.stringify(n)
    return JSON.stringify(-n)
}

const countVar = sat => {
    const {
        clauses
    } = sat
    const vars = clauses.reduce((m, n) => m.concat(n))
    return uniq(vars.map(abs)).length
}

const verify3SAT = sat => {
    const {
        nbVar,
        nbClause,
        clauses
    } = sat

    return (
        nbVar == countVar(sat) &&
        nbClause == clauses.length
    )
}

const parse3SAT = data => {
    // ensure 3SAT{...}
    if (!/^3SAT{[^}]+}/.test(data)) {
        return Promise.reject("not proper 3SAT format.")
    }
    data = data.replace(/^3SAT{\n*/, "").replace(/}.*/, "").split("\n")
    remove(data, e => e.length < 1)
    const [nbVar, nbClause] = data.shift().split(/ +/)
    const clauses = data.map(e => e.split(/ +/))
    const sat = {
        nbVar,
        nbClause,
        clauses
    }

    if (!verify3SAT(sat)) {
        return Promise.reject("not a correct 3SAT.")
    }
    return sat
}

const SATGraph = sat => {
    var links = []
    var points = []
    var pClauses = []
    var pTransition = ["t0"]
    var pVars = []
    const {
        nbVar,
        nbClause,
        clauses
    } = sat
    for (let i = 0; i < nbClause; i++) {
        pClauses.push(`c${i}`)
    }
    for (let i = 0; i < nbVar; i++) {
        pTransition.push(`t${i+1}`)
        let tmp = []
        for (let j = 0; j < nbClause * 3 + 3; j++) {
            tmp.push(`v_${i}_${j}`)
        }
        pVars.push(tmp)
    }
    points = pClauses.concat(pTransition)
    for (let i of pVars) {
        points.concat(i)
    }
    for (let i = 0; i < nbVar; i++) {
        links.push([pTransition[i], pVars[i][0]])
        links.push([pTransition[i], pVars[i][pVars[i].length - 1]])
        links.push([pVars[i][0], pTransition[i + 1]])
        links.push([pVars[i][pVars[i].length - 1], pTransition[i + 1]])
        for (let j = 0; j < pVars[i].length - 1; j++) {
            links.push([pVars[i][j], pVars[i][j + 1]])
            links.push([pVars[i][j + 1], pVars[i][j]])
        }
    }
    for(let i = 0; i < nbClause; i++){
        for(let v of clauses[i]){
            if(v > 0){
                links.push([pVars[parseInt(v)-1][3*i+2], pClauses[i]])
                links.push([pClauses[i], pVars[parseInt(v)-1][3*i+3]])
            }else{
                links.push([pClauses[i], pVars[-parseInt(v)-1][3*i+2]])
                links.push([pVars[-parseInt(v)-1][3*i+3], pClauses[i]])
            }
        }
    }
    points = points.concat(pVars.reduce((m, n) => m.concat(n)))
    return {
        points,
        links
    }
}

// read3SAT("../instances/3SAT_vrai.txt")
//     .then(parse3SAT)
//     .then(SATGraph)
//     .then(graph => {
//         console.log(graph)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const parser = pathFile =>
    read3SAT(pathFile)
        .then(parse3SAT)
        .then(SATGraph)

module.exports = parser

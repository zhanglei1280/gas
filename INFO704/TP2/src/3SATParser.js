const fs = require("fs")
const {
    remove,
    uniq
} = require("lodash")

const read3SAT = pathFile => new Promise((resolve, reject) => {
    fs.readFile(pathFile, (err, data) => {
        if(err) reject(err)
        else resolve(data.toString())
    })
})

const abs = n => {
    if(n >= 0) return n.toString()
    return (-n).toString()
}

const countVar = sat => {
    const {clauses} = sat
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
        nbVar === countVar(sat)
        &&
        nbClause === clauses.length
    )
}

const parse3SAT = data => {
    // ensure 3SAT{...}
    if(!/^3SAT{[^}]+}/.test(data)){
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

    if(!verify3SAT(sat)){
        return Promise.reject("not a correct 3SAT.")
    }
    return sat
}

const SATGraph = sat => {
    
}

read3SAT("../instances/3SAT_vrai.txt")
    .then(parse3SAT)
    .then(data => {
        console.log(countVar(data))
    })
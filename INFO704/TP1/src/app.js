const fs = require("fs")

const {
    randint
} = require("./utils/utils")

// Ex 1
const plateauRand = len => [
    0, 
    ...(new Array(len - 1)
        .fill(0)
        .map(() => randint(1, 20))),
    0
]

const plateauRead = path => fs.readFileSync(path)
    .toString()
    .split("\n")
    .filter(e => e.length > 0)
    .map(e => parseInt(e))

// a
const sommeMinRec = (t, i) => {
    if(i === 0) return 0
    var opt = Infinity
    var tmp
    for(let x of [1, 3, 5]){
        if(x <= i){
            tmp = t[i] + sommeMinRec(t, i-x)
            if(tmp < opt){
                opt = tmp
            }
        }
    }
    return opt
}

const sommeMinRecRead = path => {
    const t = plateauRead(path)
    return sommeMinRec(t, t.length-1)
}

// b
// La taille d'entree: la taille de t
// La complexite temporelle: n^2

module.exports = {
    sommeMinRecRead
}

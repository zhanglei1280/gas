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

console.log(plateauRead(__dirname+"/Pb1/10"))
// a
const sommeMinRec = (t, i) => {
    if(i === 0) return 0
    let opt = Infinity
    let tmp
    for(let i of [1, 3, 5]){
        if(x <= 1){
            tmp = t[1] + sommeMinRec(t, i-x)
        }
        if(tmp < opt){
            opt = tmp
        }
    }
    return opt
}

const sommeMin = path => {
    const t = plateauRead(path)
    return sommeMinRec(t, t.length)
}

module.exports = {
    sommeMin
}

const path = require("path")

const {
    sommeMinRecRead
} = require("./app")

describe('Ex 1 SommeMin', () => {
    it("doit calculer le minimum somme", done => {
        let ops = [5, 10, 20]
            .map(e => new Promise(resolve => resolve(sommeMinRecRead(path.join(__dirname, "Pb1", e.toString())))))
        Promise.all(ops).then(res => {
            console.log(res)
            done()
        }).catch(done)
    })
})
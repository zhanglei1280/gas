const expect = require("expect")
const parser = require("../src/3SATParser")
const reducer = require("../src/tp3")

describe('Parser', () => {
    it("should parse a correct 3SAT problem", done => {
        parser("./instances/3SAT_vrai.txt")
            .then(graph => {
                expect(graph).toBeTruthy()
                done()
            })
            .catch(done)
    })

    it("should detect an incorrect 3SAT problem", done => {
        parser("./instances/3SAT_faux.txt")
            .then(graph => {
                expect(graph).toBeFalsy()
                done()
            })
            .catch(err => {
                done()
            })
    })
})

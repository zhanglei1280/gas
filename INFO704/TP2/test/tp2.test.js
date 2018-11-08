const expect = require("expect")
const parser = require("../src/grapheParser")
const {
    verifierCertificat,
    genereEtTeste,
    solvBackTracking
} = require("../src/tp2")

describe("Parser", () => {
    it("should parse a correct graph text to its format", done => {
        parser("./instances/chno_vrai_1.txt")
            .then(graph => {
                expect(graph).toBeTruthy()
                expect(graph.points).toBeTruthy()
                expect(graph.points.length > 0).toBeTruthy()
                expect(graph.links).toBeTruthy()
                expect(graph.links.length > 0).toBeTruthy()
                done()
            })
            .catch(done)
    })

    it("should bring error when the graphe text is wrong", done => {
        parser("./instances/chno_fausse_1.txt")
            .then(graph => {
                expect(graph).toBeFalsy()
            })
            .catch(err => {
                done()
            })
    })
})

describe("Verifier Certificat", () => {
    it("should verify paths", done => {
        parser("./instances/chno_vrai_1.txt")
            .then(graph => {
                const pathsHamilton = [
                    ["s4", "s2", "s1", "s3"]
                ]

                const pathsWrong = [
                    ["s1"],
                    ["s1", "s1", "s2", "s3"],
                    ["s4", "s3", "s2", "s1"]
                ]

                for (let i of pathsHamilton) {
                    expect(verifierCertificat(graph, i)).toBeTruthy()
                }
                for (let i of pathsWrong) {
                    expect(verifierCertificat(graph, i)).toBeFalsy()
                }

                done()
            }).catch(done)
    })
})

describe("Genere et Teste", () => {
    it("should generate and test", done => {
        parser("./instances/chno_vrai_1.txt")
            .then(graph => {
                const res = genereEtTeste(graph, true)
                expect(res.length > 0).toBeTruthy()
                done()
            }).catch(done)
    })
})

describe("solvBackTracking", () => {
    it("should solve BackTracking", done => {
        parser("./instances/chno_vrai_1.txt")
            .then(graph => {
                const cycle = solvBackTracking(graph)
                expect(cycle).toBeTruthy()
                expect(verifierCertificat(graph, cycle)).toBeTruthy()
                done()
            }).catch(done) 
    })
})

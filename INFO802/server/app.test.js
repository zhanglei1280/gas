const expect = require("expect")
const Coordinate = require("./Coordinate")
const soap = require("soap")
const app = require("./app")

describe('class Coordinate', () => {
  it("should calculate distance from 2 points", done => {
      let p1 = new Coordinate(1.2342, 4.564)
      let p2 = new Coordinate(5.2354, 9.345)
      console.log(p1.distance(p2))
      done()
  })
})

describe('soap getDistance()', () => {
  it("should get distance", done => {
    const url = "http://localhost:20191/Distance?wsdl"
    const args = {
        x1: 1.2342,
        y1: 4.564,
        x2: 5.2354,
        y2: 9.345
    }
    let p1 = new Coordinate(1.2342, 4.564)
    let p2 = new Coordinate(5.2354, 9.345)
    const distanceCalculated = p1.distance(p2)

    soap.createClientAsync(url)
        .then(client => {
            return client.getDistanceAsync(args)
        })
        .then(distance => {
            expect(parseInt(distance[0].distance)).toBe(Math.floor(distanceCalculated))
            done()
        })
        .catch(done)
  })
})


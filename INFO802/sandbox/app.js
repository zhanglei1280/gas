const soap = require("soap")
const url = "http://localhost:20191/Distance?wsdl"
const args = {
    x1: 3.14,
    y1: 1.717,
    x2: 1.475,
    y2: 6.3435
}

var hello = {
    from: "haha"
}

soap.createClientAsync(url)
    .then(client => {
        return client.getDistanceAsync(args)
    })
    .then(distance => {
        console.log(distance)
    })
    .catch(err => {
        console.log(err)
    })

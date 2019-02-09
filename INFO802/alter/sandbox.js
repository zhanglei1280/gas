const {stations, journeys} = require("sncf")
const fs = require("fs")

// var lyon = stations("lyon")
// var grenoble = stations("grenoble")

const day = 24*60*60*1000

// journeys(lyon, grenoble, new Date(), day)
//     .then(console.log)
//     .catch(console.log)

const search = (source, dest, now = (new Date()), till = day) => {
    let s1 = stations(source)
    let s2 = stations(dest)
    return Promise.all([s1, s2])
        .then(values => {
            let id1 = values[0][0]
            let id2 = values[1][0]
            if(!id1 || !id2){
                return {
                    id1, id2
                }
            }
            return journeys(id1, id2, now, till)
        })
}

search("grenoble", "lyon")
    .then(data => {
        console.log(data)
    })
    .catch(console.log)

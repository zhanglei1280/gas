const {stations, journeys} = require("sncf")

const search = (source, dest, now = (new Date()), till = 24*60*60*1000) => {
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

module.exports = search

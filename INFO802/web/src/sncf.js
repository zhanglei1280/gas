const api = query => {
    return `https://data.sncf.com/api/records/1.0/search/?dataset=liste-des-gares&q=${query}&facet=fret&facet=voyageurs&facet=code_ligne&facet=departement`
}

const sncf = query => {
    return fetch(api(query))
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data && data.records && data.records[0] && data.records[0].fields.coordonnees_geographiques){
                return data.records[0].fields.coordonnees_geographiques
            }else{
                return []
            }
        })
}

export default sncf

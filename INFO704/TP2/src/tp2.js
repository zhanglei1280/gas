const {
    isUniq,
    isSameElement,
    isSubset,
    reduceCycle,
    allSubsets,
    pathToString,
    findLinks
} = require("./utils")

const verifierCertificat = (graph, cycle) => {
    // once
    if(!isUniq(cycle)) return false
    // all
    if(!isSameElement(cycle, graph.points)) return false
    // passage existence
    return isSubset(reduceCycle(cycle), graph.links)
}

const genereEtTeste = graph => {
    const cycles = allSubsets(graph.points)
    cycles.forEach(e => {
        let res = verifierCertificat(graph, e)
        console.log(e, res)
    })
}

const solvBackTracking = graph => {
	for(let i of graph.points){
        console.log(i)
		let cycle = findLinks(graph, i, graph.points.length);
		if(verifierCertificat(graph, cycle)){
			console.log(`La suite ${pathToString(cycle)} a reussi.`);
			return cycle
		}
    }
    console.log("not found")
	return false
};

const oneCycle = graph => {
    const cycles = allSubsets(graph.points)
    for(let i = 0; i < cycles.length; i++){
        if(verifierCertificat(graph, cycles[i])){
            return true
        }
    }
    return false
}

module.exports = {
    verifierCertificat,
    genereEtTeste,
    solvBackTracking,
    oneCycle
}

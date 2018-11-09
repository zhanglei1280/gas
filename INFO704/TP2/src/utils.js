const {
    uniq,
    reverse,
    filter
} = require("lodash")

const CHOtoCHNO = graph => {
    const reversed = [...graph.links].map(e => reverse([...e]))
    graph.links = [...graph.links, ...reversed]
}

const isUniq = arr => arr.length === uniq(arr).length

const isSameElement = (arr1, arr2) => (
    arr1.every(e => arr2.includes(e)) &&
    arr2.every(e => arr1.includes(e))
)

const includeArr = (arr, e) => {
    for (let i = 0; i < arr.length; i++) {
        if (isSameElement(arr[i], e)) {
            return true
        }
    }
    return false
}
const isSubset = (arr1, arr2) => arr1.every(e => includeArr(arr2, e))

/**
 * reduce cycle to paths
 * @param {Array} cycle 
 */
const reduceCycle = cycle => {
    if (cycle.length <= 1) return []
    return [
        [cycle[0], cycle[1]]
    ].concat(reduceCycle(cycle.slice(1)))
}

/**
 * Obtenir tous sous-liste d'une liste
 * Modified from
 * source: https://stackoverflow.com/questions/42583892/how-to-get-all-possible-combinations-of-elements-in-an-array-including-order-and
 * @param {Array} arr 
 */
const flatten = arrays => [].concat.apply([], arrays);
const range = (lo, hi) => [...new Array(hi - lo + 1)].map((_, i) => i + lo)
const join = joiner => list => list.join(joiner)

const charSeqs = (n, chars) => (n < 1) ?
    [
        []
    ] :
    flatten(chars.map(char => charSeqs(n - 1, chars).map(
        seq => flatten([char].concat(seq))
    )))

const allCharSeqs = (n, chars) => flatten(range(1, n).map(i => charSeqs(i, chars)))

const allSubsets = arr => allCharSeqs(arr.length, arr)

const pathToString = path => path.reduce((m, n) => m + " -> " + n)

const findLinks = (graph, point, len) => {
    if (len > 0) {
        var paths = filter(graph.links, e => e[0] === point)
        for (let i of paths) {
            return [point, ...findLinks(graph, i[1], len - 1)]
        }
    }
    return [];
}

module.exports = {
    CHOtoCHNO,
    isUniq,
    isSameElement,
    isSubset,
    reduceCycle,
    allSubsets,
    pathToString,
    findLinks
}
const isSorted = arr => arr.slice(1).every((item, i) => arr[i] <= item)

const swap = (arr, i, j) => {
    var tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

const randint = (start, end) => parseInt(start + Math.random() * (end - start))

const randomArray = leng => new Array(leng).fill().map(e => randint(0, leng))

module.exports = {
    isSorted,
    swap,
    randomArray
}
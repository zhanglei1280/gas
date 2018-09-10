const isSorted = arr => {
    return arr.slice(1).every((item, i) => arr[i] <= item)
}

const swap = (array,fromIndex,toIndex) => {
    array.splice(toIndex, 0, array.splice(fromIndex, 1)[0] );
}

module.exports = {
    isSorted,
    swap
}
const swap = require("./util")

const bubble = array => {
    var len = array.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (array[j - 1] > array[j]) {
                swap(array, j, j - 1)
            }
        }
    }
}

const selection = array => {
    for (var i = 0; i < array.length; i++) {
        var min = i
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        if (i !== min) {
            swap(array, i, min)
        }
    }
}

const insertion = array => {
    for (var i = 0; i < array.length; i++) {
        var temp = array[i]
        var j = i - 1
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = temp
    }
}

const partition = (array, left, right) => {
    var pivot = array[Math.floor((right + left) / 2)]
    var i = left
    var j = right

    while (i <= j) {
        while (array[i] < pivot) {
            i++
        }
        while (array[j] > pivot) {
            j--
        }
        if (i <= j) {
            swap(array, i, j);
            i++
            j--
        }
    }

    return i
}

const quickSort = (array, left, right) => {
    var index
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
}

const merge = (leftArr, rightArr) => {
    var sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0])
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0])
            rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length) {
        sortedArr.push(leftArr.shift())
    }
    while (rightArr.length) {
        sortedArr.push(rightArr.shift())
    }
    return sortedArr
}

const mergeSort = array => {
    if (array.length < 2) {
        return array
    }
    else {
        var midpoint = parseInt(array.length / 2)
        var leftArr = array.slice(0, midpoint)
        var rightArr = array.slice(midpoint, arr.length)
        array = merge(mergeSort(leftArr), mergeSort(rightArr))
    }
}

module.exports = {
    bubble,
    insertion,
    selection,
    quickSort,
    mergeSort
}
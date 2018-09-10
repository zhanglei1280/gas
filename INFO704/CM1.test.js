const expect = require("expect")

const {
    isSorted,
    randomArray
} = require("./util")

const {
    bubble,
    insertion,
    selection,
    quickSort,
    mergeSort
} = require("./CM1")

var arr = []

const fillArray = (arr, leng) => () => {
    arr = randomArray(leng)
}

beforeEach(done => {
    fillArray(arr, 100)
    done()
})

describe("sort algos", () => {
    it("bubble", done => {
        bubble(arr)
        expect(isSorted(arr)).toBe(true)
        done()
    })

    it("insertion", done => {
        insertion(arr)
        expect(isSorted(arr)).toBe(true)
        done()
    })

    it("selection", done => {
        selection(arr)
        expect(isSorted(arr)).toBe(true)
        done()
    })

    it("quick sort", done => {
        quickSort(arr)
        expect(isSorted(arr)).toBe(true)
        done()
    })

    it("merge sort", done => {
        mergeSort(arr)
        expect(isSorted(arr)).toBe(true)
        done()
    })
})
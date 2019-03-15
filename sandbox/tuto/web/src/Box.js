const swap = (arr, i, j) => {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

const randint = (start, end) => {
    const random = Math.random()
    const randfloat = (end-start)*random + start
    return Math.floor(randfloat)
}

class Box{
    constructor(start, end){
        this.list = (new Array(end-start+1))
            .fill(0)
            .map((e,i)=>start+i)
        this.shuffle()
    }

    getList(){
        return this.list
    }

    shuffle(){
        this.list.forEach((e, i) => {
            swap(this.list, i, randint(0, this.list.length))
        })
    }

    pick(){
        return this.list.shift()
    }
}

// var box = new Box(1, 50)
// console.log(box.pick())

export default Box
// module.exports = Box

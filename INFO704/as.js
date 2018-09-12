var a, b
//const getA = setTimeout(() => {a = 3}, 2000)
const getA = new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 3
        resolve(a)
    }, 2000)
})

const getB = new Promise((resolve, reject) => {
    setTimeout(() => {
        b = 7
        resolve(b)
    }, 3000)
})

Promise.all([getA, getB]).then(values => console.log(values[0] + values[1]))
.catch(err => console.log(err))
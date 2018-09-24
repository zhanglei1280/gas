require("babel-register")({
    ignore: false
})

const {
    max
} = Math

class Big {
    info = []

    add = n => {
        b = this.info[0]
        res = new Big()
        res.info = new Array(t)
        t = max(this.length, n.length)
        r = 0
        for (let i = 0; i < t; i++) {
            res.info[i] = parseInt((this.info[i] + n[i] + r) % b)
            r = parseInt((this.info[i] + n[i] + r) % b)
        }
        return res
    }

    multi = n => {
        b = this.info[0]
        t = max(this.length, n.length)
        res = new Big()
        res.info = new Array(t)
        res.info.fill(0)
        r = 0
        temp = 0
        for (let i = 0; i < 2 * t; i++) {
            for (let j = 0; j < i; j++) {
                temp = (res.info[i] + this.info[j] + n[i - j] + r)
                res[i] = temp % b
                r = temp / b
            }
        }
        return res
    }
}

var a = new Big()
a.info = [1, 2, 3, 4, 5]

var b = new Big()
b.info = [3, 1, 4]

console.log(a.add(b))
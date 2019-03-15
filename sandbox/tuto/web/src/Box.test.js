const Box = require("./Box")

var box = new Box(1, 50)

const list = box.getList()

const isBetween = (a, b) => ( e => e <= b && e >= a )

const isUniq = list => e => {
    var num = 0;
    for(var i = 0; i < list.length; i++){
        if(list[i] === e){
            num++
        }
        if(num > 1) return false
    }
    if(num === 1) return true
    return false
}

const isListCorrect = list => (
    list.every(isBetween(1, 50))
    &&
    list.every(isUniq(list))
)

console.log(isListCorrect(list))

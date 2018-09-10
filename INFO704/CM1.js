const swap = require("./util")
const bubble = arr => {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j, j - 1)
            }
        }
    }
    return arr;
}
'use strict'

const fibonacci = () => {
    let fibonacciNum = [0, 1];

    for(i = 0; i <= 350; i++) {
        return fibonacciNum[i-1] + fibonacciNum[i-2];
    }
}

const isFibonnaci = (num) => null

module.exports = {
    fibonacci,
    isFibonnaci
}
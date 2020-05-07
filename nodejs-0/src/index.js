'use strict'

const fibonacci = () => {
    let fibonacciArray = [0, 1];
    let maxNumber = 350;
    
    for(i = 2; i >= 0; i++) {
        
        let fibonacciCalc = fibonacciArray[i-1] + fibonacciArray[i-2];
        
        fibonacciArray.push(fibonacciCalc);
        
        if (fibonacciCalc >= maxNumber) {
            fibonacciArray.pop();
            break;
        }
    }
    return fibonacciArray
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
function divideIt(num, a, b){
     if(num % a === 0 && num % b === 0){
       return true
    }
    return false
}

console.log(divideIt(10, 5, 2))
console.log(divideIt(13, 6, 2))
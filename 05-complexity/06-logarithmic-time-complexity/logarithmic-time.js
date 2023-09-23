/*
Logarithmic Time (O(log n))

Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set. 

*/

// with O(n)
function findPower(base, expo){
    if (expo === 0) return 1
    return base * findPower(base, --expo);
}

console.time('findPower')
findPower(2, 10000)
console.timeEnd('findPower')


// with O(log n)
function findPowerLogn(base, expo){
    if (expo === 0) return 1
    if(expo % 2 === 0){
        const half = findPowerLogn(base, expo / 2)
        return half * half
    } 
    const half = findPowerLogn(base, (expo - 1) / 2);
    return base * half * half
}

console.time('findPowerLogn')
findPowerLogn(2, 10000)
console.timeEnd('findPowerLogn')

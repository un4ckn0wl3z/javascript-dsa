function sumUpTo(n) {
    if(n === 1){
        console.log(`sumUpTo(${n}) return 1`)
        return 1
    }

    console.log(`sumUpTo(${n}) calls sumUpTo(${n - 1}) + ${n}`)
    const result = n + sumUpTo(n - 1)
    console.log(`sumUpTo(${n}) return ${result}`)
    return result

}

module.exports = sumUpTo;

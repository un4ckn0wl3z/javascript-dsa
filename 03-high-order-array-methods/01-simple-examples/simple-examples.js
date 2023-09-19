const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((n, i, arr) => {
    console.log("i,", i)
    console.log("arr,", arr)
    return n * 2
})
console.log("doubledNumbers", doubledNumbers)


/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNumbers = numbers.filter((n) => {
    return n % 2 === 0
})

console.log("evenNumbers", evenNumbers)



/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((total, num) => {
    return total + num
}, 0)
console.log("sum", sum)


/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((n) => {
    console.log(n)
})


 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
const found = numbers.find(num => num > 2)
console.log('found', found)

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const hasEvenNumber = numbers.some((n) => {
    return n % 2 === 0
})
console.log("hasEvenNumber", hasEvenNumber)

 

/**
 * every: Checks if all array elements satisfy a condition.
 */
const allNumGreaterThanZero = numbers.every((n) => {
    return n > 0
})

console.log("allNumGreaterThanZero", allNumGreaterThanZero)



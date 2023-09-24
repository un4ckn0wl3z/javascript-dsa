function twoSumOld(array, indic) {
    const result = new Set()
   
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i] + array[j] === indic){
                result.add(i)
                result.add(j)
            }
        }
    }

    return Array.from(result)
}

// twoSum([2, 7, 11, 15], 17);
function twoSum(array, indic) {
    const numSet = new Set()
    for (let index = 0; index < array.length; index++) {
        const complement = indic - array[index]

        if(numSet.has(complement)) {
            return [array.indexOf(complement), index]
        }
    
        numSet.add(array[index])
    }

    return []
}

module.exports = twoSum;
/**
 * i0 complement -> 17 - 2 = 15 | set (2)
 * push(2)
 * 
 * i1 complement -> 17 - 7 = 10 | set (2, 7)
 * push(7)
 * 
 * i2 complement -> 17 - 11 = 6 | set (2, 7, 11)
 * push(11)
 * 
 * i3 complement -> 17 - 15 = 2 | set (2, 7, 11)
 * 
 * 
 * numSet.has(2) === true | return [0, 3]
 * 
 */

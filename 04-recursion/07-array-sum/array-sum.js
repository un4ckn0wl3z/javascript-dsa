function arraySum(arr) {
    if (arr.length === 0) return 0
    let sum = arr[0] + arraySum(arr.slice(1))
    return sum
    
}

module.exports = arraySum;



/**
 * factorial power stack visualize
 * 
 * arraySum([1,2,3,4,5]) = 1 + arraySum([2,3,4,5])
 * arraySum([2,3,4,5]) = 2 + arraySum([3,4,5])
 * arraySum([3,4,5]) = 3 + arraySum([4,5])
 * arraySum([4,5]) = 4 + arraySum([5])
 * poarraySum([5]) = 5 + arraySum([])
 * poarraySum([]) = return 0
 * 
 * 
 * unwinding stack (skip base case)
 * 
 * return 5 + 0
 * return 4 + 5
 * return 3 + 9
 * return 2 + 12
 * return 1 + 12 = 15
 * 
 * 
 * 
 * 
 *
 *
 */
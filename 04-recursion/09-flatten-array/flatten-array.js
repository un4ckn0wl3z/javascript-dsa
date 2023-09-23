function flattenArray(arr) {
    let result = []
    for (const item of arr) { // base case is when end of loop (last array index) [implicit]
        if(Array.isArray(item)){
            result = result.concat(flattenArray(item)) // recursive case
        } else {
            result.push(item)
        }
    }
    return result; // unwind
}


module.exports = flattenArray;

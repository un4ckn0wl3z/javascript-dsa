function numberRange(start, end) {

    // base case
    if (start === end) return [start]

    // recursive case
    const arr = []
    arr.push(start)
    const new_ = numberRange(start + 1, end) 

    // unwind
    return arr.concat(new_)
}

module.exports = numberRange;

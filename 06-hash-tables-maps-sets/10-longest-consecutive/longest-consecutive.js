function longestConsecutiveSequence(arr) {
    const arrSet = new Set(arr)
    let longestSeq = 0;
    for (const num of arrSet) {
        if (!arrSet.has(num-1)){
            let current = num
            let currentSeq = 1

            while (arrSet.has(current + 1)) {
                current++
                currentSeq++
            }
            longestSeq = Math.max(longestSeq, currentSeq)
        }
    }

    return longestSeq

}

module.exports = longestConsecutiveSequence;

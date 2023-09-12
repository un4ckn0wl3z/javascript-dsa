function findMaxNumber(nums) {
    let max = nums[0];
    nums.forEach(n => {
        if (n > max) max = n
    })
    return max
}

module.exports = findMaxNumber;

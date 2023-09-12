function findMaxNumber2(nums){
    return Math.max(...nums)
}

function findMaxNumber(nums) {
    let max = nums[0];
    nums.forEach(n => {
        if (n > max) max = n
    })
    return max
}

module.exports = findMaxNumber;

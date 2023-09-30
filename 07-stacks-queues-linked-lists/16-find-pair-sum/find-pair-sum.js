const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(nums, targetSum) {
    const seen = new DoublyLinkedList()
    for (const num of nums) {
        const diff = targetSum - num
        if (seen.contains(diff)) {
            return [diff, num]
        }
        seen.append(num)
    }

    return null
}

module.exports = findPairSum;

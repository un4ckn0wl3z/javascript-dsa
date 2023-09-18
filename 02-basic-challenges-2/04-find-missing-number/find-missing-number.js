function findMissingNumber(numbers) {
    if (!numbers.length) return 1
    const n = numbers.length + 1
    const expectedSum = n * (n + 1) / 2

    console.log("expectedSum", expectedSum)

    let actualSum = 0
    for (let index = 0; index < numbers.length; index++) {
        actualSum += numbers[index];
    }

    console.log("actualSum", actualSum)


    return expectedSum - actualSum
}

module.exports = findMissingNumber;

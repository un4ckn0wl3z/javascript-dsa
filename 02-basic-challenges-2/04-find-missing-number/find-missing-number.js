function findMissingNumber(numbers) {
    if (!numbers.length) return 1
    const n = numbers.length + 1
    const expectedSum = n * (n + 1) / 2

 
    // let actualSum = 0
    // for (let index = 0; index < numbers.length; index++) {
    //     actualSum += numbers[index];
    // }

    const actualSum = numbers.reduce((sum, num) => sum + num, 0);


 

    return expectedSum - actualSum
}

module.exports = findMissingNumber;

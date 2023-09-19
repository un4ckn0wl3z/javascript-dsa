function sumOfEvenSquares2(numbers) {
    const sumOfSquare = numbers.reduce((total, n) => {
        if(n % 2 === 0){
            total += Math.pow(n, 2)
        }
        return total
    }, 0)
    return sumOfSquare
}


function sumOfEvenSquares1(numbers) {
    const evenNumber = numbers.filter(n => n % 2 === 0)
    const squarNumber = evenNumber.map(n => Math.pow(n, 2))
    const reduceNumber = squarNumber.reduce((total, num) => {
        return total + num
    }, 0)

    return reduceNumber
}

module.exports = sumOfEvenSquares2;

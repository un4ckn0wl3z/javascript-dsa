function diceGameSimulation(num) {
    const results = []
    for (let index = 0; index < num; index++) {
        let result = ''
        const dice1 = Math.floor(Math.random() * 6) + 1
        const dice2 = Math.floor(Math.random() * 6) + 1
        sum = dice1 + dice2
        if(sum === 7 || sum === 11){
            result = 'win'
        } else if (sum === 2 || sum === 3 || sum == 12){
            result = 'lose'
        } else {
            result = 'roll again'
        }

        results.push({
            dice1,
            dice2,
            sum,
            result
        })
    }

    return results;
}

module.exports = diceGameSimulation;

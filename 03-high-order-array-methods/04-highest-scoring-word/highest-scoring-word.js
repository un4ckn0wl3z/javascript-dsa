function highestScoringWord(str) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const words = str.split(' ')

    const mapper = words.map((w) => {
        let score = 0 
        for (let index = 0; index < w.length; index++) {
            score += alphabets.indexOf(w[index]) + 1
        }
        return {
            word: w,
            score
        }
    })

    const highest = mapper.reduce((acc, word) => {
        if(word.score > acc.score){
            acc = word
        }
        return acc
    }, mapper[0])

    return highest.word
}

module.exports = highestScoringWord;

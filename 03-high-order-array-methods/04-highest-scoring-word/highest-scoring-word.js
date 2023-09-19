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


function highestScoringWord2(str){
    const words = str.split(' ')
    const scores = words.map((word) => {
        let score = 0
        for(const letter of word){
            score += letter.charCodeAt(0) - 96
        }
        return score;
    })

let highestScore = 0;
let highestIndex = 0;

for (let index = 0; index < scores.length; index++) {
    if(scores[index] > highestScore){
        highestScore = scores[index]
        highestIndex = index
    }
}

return words[highestIndex]


}


function highestScoringWord3(str){
    const words = str.split(' ')
    const scores = words.map((word) => {
        return Array.from(word).reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0)
    })

    const highestScore = Math.max(...scores)
    const highestIndex = scores.indexOf(highestScore)
    return words[highestIndex]

}


module.exports = highestScoringWord3;

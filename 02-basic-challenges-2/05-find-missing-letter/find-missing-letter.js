function findMissingLetter(letters) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const startIndex = alphabet.indexOf(letters[0])

    console.log(startIndex)
    
    for (let index = 0; index < letters.length; index++) {
        if(letters[index] !== alphabet[startIndex + index]){
            return alphabet[startIndex + index]
        }
    }

    return ''
}

module.exports = findMissingLetter;

function countVowels(str) {
    const vowels = 'aeiou';
    const strLowerCase = str.toLowerCase();
    let vowelCount = 0;
    strLowerCase.split('').forEach(c => {
        if(c === vowels[0] || c === vowels[1] || c === vowels[2] || c === vowels[3] || c === vowels[4]){
            vowelCount++;
        }
    })
    return vowelCount
}

module.exports = countVowels;

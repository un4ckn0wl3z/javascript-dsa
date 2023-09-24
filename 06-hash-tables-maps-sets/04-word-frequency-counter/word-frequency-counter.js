function wordFrequencyCounter(words) {
    
    if (words === '') return new Map()

    const wordsArr = words.toLowerCase().replaceAll('.', '').replaceAll(',', '').split(' ')
    const wordFreq = new Map()
    for (const item of wordsArr) {
        wordFreq.set(item, (wordFreq.get(item) || 0) + 1)
    }
    
    return wordFreq
}

module.exports = wordFrequencyCounter;

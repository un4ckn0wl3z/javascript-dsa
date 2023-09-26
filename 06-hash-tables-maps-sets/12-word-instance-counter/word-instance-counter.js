const HashTable = require('./HashTable');

function wordInstanceCounter(words, target) {
    const hasTable = new HashTable()
    const wordsArr = words.toLowerCase().replaceAll(',', '').replaceAll('.', '').replaceAll('!', '').split(' ')
     for (const word of wordsArr) {
        if (word === target){
            hasTable.set(target,  (hasTable.get(target) || 0) + 1)
        }
    }

    return hasTable.get(target)
}

module.exports = wordInstanceCounter;

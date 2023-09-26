const HashTable = require('./HashTable');

function anagramGrouping(arr) {

    const result = new HashTable()

    for (const item of arr) {
        const sorted = item.split('').sort().join('')

        if(!result.has(sorted)){
            result.set(sorted, [item])
        } else {
            const previousArr = result.get(sorted)
            previousArr.push(item)
            result.set(sorted, previousArr)
        }

    }

    return Array.from(result.getValues())

}

module.exports = anagramGrouping;

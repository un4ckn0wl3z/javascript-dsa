function anagramGrouping(arr) {
    const result = new Map()

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

    return result.values()
    
}

module.exports = anagramGrouping;

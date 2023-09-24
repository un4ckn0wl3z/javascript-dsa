function symmetricDifference(arr1, arr2) {
    const newArr = []
    const setArr1 = new Set(arr1)
    const setArr2 = new Set(arr2)

    for (const item of setArr1) {
        if (!setArr2.has(item)) newArr.push(item)
    }

    for (const item of arr2) {
        if (!setArr1.has(item)) newArr.push(item)
    }

    return newArr
}

module.exports = symmetricDifference;

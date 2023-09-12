// function countOccurrences(str, char) {
//     let found = 0
//     for (i=0; i<str.length; i++) {
//         if (str[i] === char) found++
//     }
//     return  found
// }

const countOccurrences = (str, char) => {
    const splitter = str.split(char).length - 1
    return splitter
}

module.exports = countOccurrences;

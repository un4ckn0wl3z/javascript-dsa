// function countOccurrences(str, char) {
//     let found = 0
//     for (i=0; i<str.length; i++) {
//         if (str[i] === char) found++
//     }
//     return  found
// }

const countOccurrences = (str, char) => {
    const splitter = str.split(char) // using char to split the whole text into seperate size
    return splitter.length - 1 // -1 cuz if it has 1 char will split into 2 size
}

module.exports = countOccurrences;

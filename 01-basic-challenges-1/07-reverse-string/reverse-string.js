function reverseString(str) {
    let result = '';
    for(i=str.length-1;i>=0;i--){
        result += str[i]
    }
    return result
}

function reverseString2(str) {
    return str.split('').reverse().join('')
}

module.exports = reverseString2;

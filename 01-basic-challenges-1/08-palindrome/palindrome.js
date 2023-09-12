function isPalindrome(str) {
    const alphanum = str.replace(/[^a-z0-9]/gi, '');
    const reversed = alphanum.split('').reverse().join('')
    return alphanum.toLowerCase() === reversed.toLowerCase()
}

module.exports = isPalindrome;

function reverseString(str) {
    
    // Base Case
    if(str === ''){
        return ''
    }
    // Recursive Case
    const reversed = reverseString(str.substring(1))

    // Unwind
    return reversed + str.charAt(0)

}

module.exports = reverseString;


/**
 * 
 * reverseString(str.substring(ello)) + 'h'
 * reverseString(str.substring(llo)) + 'e'
 * reverseString(str.substring(lo)) + 'l'
 * reverseString(str.substring(o)) + 'l'
 * reverseString(str.substring('')) + 'o'
 * 
 * unwind
 * ''+'o'+'l'+'l'+'e'+'h'
 */
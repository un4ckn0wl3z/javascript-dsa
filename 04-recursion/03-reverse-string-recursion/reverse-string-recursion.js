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
 * reverseString(str.substring(ello))
 * reverseString(str.substring(llo))
 * reverseString(str.substring(lo))
 * reverseString(str.substring(o))
 * reverseString(str.substring(''))
 * 
 * unwind
 * ''+'o'+'l'+'l'+'e'+'h'
 */
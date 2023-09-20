function validatePassword(str) {
    
    const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const digits = '0123456789'
    
    if (!str.length || str.length < 8) return false

    const flagProps = Array.from(str).reduce((acc, c) => {
        if(upperCaseAlphabet.includes(c)){
            acc.containUpperCase = true
        }
        if(lowerCaseAlphabet.includes(c)){
            acc.containLowerCase = true
        }
        if(digits.includes(c)){
            acc.containDigit = true
        }
        return acc
    },{
        containUpperCase: false,
        containLowerCase: false,
        containDigit: false
    })

    const result = Object.values(flagProps).every((flag) => flag === true)
    
    return result
}


function validatePassword2(password) {
    const isLengthValid = password.length >= 8
    const hasUpperCase = password.split('').some((char) => char === char.toUpperCase() && char !== char.toLowerCase())
    const hasLowerCase = password.split('').some((char) => char === char.toLowerCase() && char !== char.toUpperCase())
    const hasDigit = password.split('').some((char) => !isNaN(parseInt(char)))

    return isLengthValid && hasUpperCase && hasLowerCase && hasDigit

}

module.exports = validatePassword2;

function findMissingLetter(arr) {
    let start = arr[0].charCodeAt(0) // get charcode from first index
    const missingCharCode = arr
    .map((char) => char.charCodeAt(0)) // transform character to charcode
    .find((current) => { // loop through transformed charcode
        if(current - start > 1 ){ // if current - start > 1 it mean found skipped character
            return true // tell a find mehtod "Yes, I'm found" and return back current charcode
        }
        start = current // change start charcode to current (it's will previous in next)
        return false // tell a find method "Nahh, not found yet"
    })

    return missingCharCode ? String.fromCharCode(missingCharCode - 1) : ''
}

module.exports = findMissingLetter;

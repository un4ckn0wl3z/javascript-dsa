function areAllCharactersUnique(str) {
    if (str === '') return true

    const arr = []
    for (let index = 0; index < str.length; index++) {
        if(index === 0) {
            arr.push(str[index])
        }else{
            if(arr.includes(str[index])) {
                return false
            }
        }
        arr.push(str[index])
    }

    return true

}


function areAllCharactersUnique2(str){
    const charCount = {}

    for (let index = 0; index < str.length; index++) {
        const char = str[index]
        if(charCount[char]){
            return false
        }
        charCount[char] = true
    }

    return true
}


module.exports = areAllCharactersUnique2;

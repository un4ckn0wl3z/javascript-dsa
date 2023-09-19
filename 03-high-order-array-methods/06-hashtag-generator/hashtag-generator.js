function generateHashtag(str) {
    
    if (!str.length || str.length > 140) return false
    const words = str.trim().split(' ').filter(word => word !== '')
    const toUpperCase = words.map(word => {
        const splitter = word.split('')
        splitter[0] = splitter[0].toUpperCase()
        return splitter.join('')
    })

    return "#" + toUpperCase.join('')

}


function generateHashtag2(str) {
    
    if (!str.length || str.length > 140) return false
    const words = str.trim().split(' ').filter(word => word !== '')
    const toUpperCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return "#" + toUpperCase.join('')

}



function generateHashtag3(str) {
    
    if (!str.length || str.length > 140) return false
    const words = str.trim().split(' ').filter(word => word !== '')
    return words.reduce((tag, word) => tag + word.charAt(0).toUpperCase() + word.substring(1), '#')

}

module.exports = generateHashtag3;

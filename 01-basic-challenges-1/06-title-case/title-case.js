function titleCase(str) {
    const lower = str.toLowerCase()
    let result = ''
    for(i=0; i<lower.length;i++){
        if(i === 0){
            result += lower[i].toUpperCase()
        }else if(lower[i-1] === ' '){
            result += lower[i].toUpperCase()
        }else {
            result += lower[i]
        }
    }
    return result
}

function titleCase2(str) {
    const words = str.toLowerCase().split(' ')
    for(i=0;i<words.length;i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ')
}

module.exports = titleCase2;

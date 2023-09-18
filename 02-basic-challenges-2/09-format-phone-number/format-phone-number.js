function formatPhoneNumber(nums) {

    let result = ''

    for (let index = 0; index < nums.length; index++) {
        if (index === 2){
            result = "(" + `${nums[0]}${nums[1]}${nums[2]}) `
        }else if (index === nums.length-1){
            result += `${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`
            return result
        }
    }
}


function formatPhoneNumber2(nums) {
    let format = '(xxx) xxx-xxxx'.split('')
    let j=0;
    for (let index = 0; index < format.length; index++) {
        if (format[index] === 'x') {
            format[index] = `${nums[j++]}`
        }
    }

    return format.join('')

}

module.exports = formatPhoneNumber2;

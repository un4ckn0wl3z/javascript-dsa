function removeDuplicates1(arr) {
    
    let newArr = []

    for(i=0;i<arr.length;i++){
        if(!newArr.find(m => arr[i] === m)){
            newArr.push(arr[i])
        }
        
     }

     return newArr;
}

function removeDuplicates2(arr) {
    
    let newArr = []

    for(i=0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
        
     }

     return newArr;
}

function removeDuplicates3(arr) {
    return Array.from(new Set(arr))
}


module.exports = removeDuplicates3;

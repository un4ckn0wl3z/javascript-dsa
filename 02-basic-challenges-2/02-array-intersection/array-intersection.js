function arrayIntersection(arr1, arr2) {
    
    let store = []

    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1.includes(arr2[j])){
                store.push(arr2[j])
            }
        }
    }

    return Array.from(new Set(store));
}


function arrayIntersection2(arr1, arr2) {
    
    let store = []

    for(i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i]) && !store.includes(arr1[i])){
            store.push(arr1[i])
        }
    }

    return store
}



function arrayIntersection3(arr1, arr2) {
    const set1 = new Set(arr1)    
    const set2 = new Set(arr2)    
    const intersectArr = []
    for(let num of set2){
        if(set1.has(num)){
            intersectArr.push(num)
        }
    }
    return intersectArr;
}

module.exports = arrayIntersection3;

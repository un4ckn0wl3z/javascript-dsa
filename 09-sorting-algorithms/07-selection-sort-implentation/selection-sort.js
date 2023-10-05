
//  [4, 3, 2, 10, 12, 1, 5, 6];
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {       
        let minIndex = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        } 

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }

        // step 0: [1, 3, 2, 10, 12, 4, 5, 6]; -> swap 4,1
        // step 1: [1, 2, 3, 10, 12, 4, 5, 6]; -> swap 2,3
        // step 2: [1, 2, 3, 10, 12, 4, 5, 6]; -> no swap
        // --------------------------------------------------
        // step 3.1: is 12 < 10 : SKIP
        // step 3.2: is 4 < 10 : YES
        // step 3.3: minIndex = 5
        // step 3.4: is 5 < 4 SKIP
        // step 3.5: is 6 < 4 SKIP | SO minIndex = 5 (value is 4)
        // step 3.6: [1, 2, 3, 4, 12, 10, 5, 6]; -> swap 4, 10
        // --------------------------------------------------
        // step 4: [1, 2, 3, 4, 5, 10, 12, 6]; -> swap 5, 12
        // step 5: [1, 2, 3, 4, 5, 6, 12, 10]; -> swap 6, 10
        // step 5: [1, 2, 3, 4, 5, 6, 10, 12]; -> swap 10, 12
 

    }

    return array
}

module.exports = selectionSort;

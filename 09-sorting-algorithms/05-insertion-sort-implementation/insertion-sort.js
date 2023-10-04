
// const array = [4, 3, 2, 10, 12, 1, 5, 6];

function insertionSort(array) {
    for (let index = 1; index < array.length; index++) {
        const currentElement = array[index]
        let j = index - 1

        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j]
            j--
        }

        array[j + 1]  = currentElement

        // console.log(array)

    }

    return array
}

// const array = [4, 3, 2, 10, 12, 1, 5, 6];
// index = 1
/**
 * 
        const currentElement = array[index] // currentElement = 3
        let j = index - 1 // j = 0
               0 >= 0           4 > 3
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j] | array[1] = 4
            j--
        }
              -1 + 1
        array[j + 1]  = currentElement | array[0] = 3

        end: [3, 4, 2, 10, 12, 1, 5, 6];





// const array = [3, 4, 2, 10, 12, 1, 5, 6]
// index = 2
/**
 * 
        const currentElement = array[index] // currentElement = 2
        let j = index - 1 // j = 1
               1 >= 0           4 > 2
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j] | array[2] = 4
            j--
        }
        now: [3, 4, 4, 10, 12, 1, 5, 6]

               0 >= 0           3 > 2
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j] | array[1] = 3
            j--
        }
        now: [3, 3, 4, 10, 12, 1, 5, 6]

              -1 + 1
        array[j + 1]  = currentElement | array[0] = 2

        now: [2, 3, 4, 10, 12, 1, 5, 6]
 









// const array = [2, 3, 4, 10, 12, 1, 5, 6]
// index = 3
/**
 * 
        const currentElement = array[index] // currentElement = 10
        let j = 3 - 1 // j = 2
               2 >= 0           4 > 10 SKIP
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j] | array[2] = 4
            j--
        }
        now: [2, 3, 4, 10, 12, 1, 5, 6]

              2 + 1
        array[j + 1]  = currentElement | array[3] = 10

        now: [2, 3, 4, 10, 12, 1, 5, 6]










// const array = [2, 3, 4, 10, 12, 1, 5, 6]
// index = 4
/**
 * 
        const currentElement = array[index] // currentElement = 12
        let j = 4 - 1 // j = 3
               3 >= 0           10 > 12 SKIP
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j] | array[2] = 4
            j--
        }
        now: [2, 3, 4, 10, 12, 1, 5, 6]

              2 + 1
        array[j + 1]  = currentElement | array[3] = 10

        now: [2, 3, 4, 10, 12, 1, 5, 6]






// const array = [2, 3, 4, 10, 12, 1, 5, 6]
// index = 5
/**
 * 
        const currentElement = array[index] // currentElement = 1
        let j = 5 - 1 // j = 4
               4 >= 0           12 > 1
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j] | array[5] = 12
            j--
        }
        now: [2, 3, 4, 10, x, 12, 5, 6]



               3 >= 0           10 > 1
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j] | array[4] = 10
            j--
        }
        now: [2, 3, 4, x, 10, 12, 5, 6]




               2 >= 0           4 > 1
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j] | array[3] = 4
            j--
        }
        now: [2, 3, x, 4, 10, 12, 5, 6]




               1 >= 0           3 > 1
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j] | array[2] = 3
            j--
        }
        now: [2, x, 3, 4, 10, 12, 5, 6]



               0 >= 0           2 > 1
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j] | array[1] = 2
            j--
        }
        now: [x, 2, 3, 4, 10, 12, 5, 6]






              -1 + 1
        array[j + 1]  = currentElement | array[0] = 1

        now: [1, 2, 3, 4, 10, 12, 5, 6]
 * 
 * 
 * 
 */
module.exports = insertionSort;

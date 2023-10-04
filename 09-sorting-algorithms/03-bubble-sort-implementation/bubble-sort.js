// const array = [5, 4, 2, 1];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array)
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    return array
}
/**
 *      [ 5, 4, 2, 1 ]
 * 
        for (let j = 0; j < 3; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }

        end: [ 4, 5, 2, 1 ]

        for (let j = 1; j < 3; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }

         end: [ 4, 2, 5, 1 ]

        for (let j = 2; j < 3; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
        
         end: [ 4, 2, 1, 5 ]


        for (let j = 0; j < 2; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }

         end: [ 2, 4, 1, 5 ]

        for (let j = 1; j < 2; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }

         end: [ 2, 1, 4, 5 ]


        for (let j = 0; j < 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }

        [ 1, 2, 4, 5 ]
 * 
 * 
 * 
 * 
 */


module.exports = bubbleSort;

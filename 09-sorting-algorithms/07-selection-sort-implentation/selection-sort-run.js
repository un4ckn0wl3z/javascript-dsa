function generateRandomUniqueArray(length) {
    if (length <= 0) {
      return [];
    }
  
    const uniqueArray = [];
    
    while (uniqueArray.length < length) {
      const randomNumber = Math.floor(Math.random() * 10000); // You can adjust the range as needed
      if (!uniqueArray.includes(randomNumber)) {
        uniqueArray.push(randomNumber);
      }
    }
  
    return uniqueArray;
  }

const selectionSort = require('./selection-sort');

const array = generateRandomUniqueArray(10000);
console.time('selectionSort')
const result = selectionSort(array);
console.timeEnd('selectionSort')
console.log(result);


// const data = ['a','b','c','d','e','f']
// console.log(data)

// console.log([data[0],data[1]] = [data[1],data[0]])
// console.log(data)

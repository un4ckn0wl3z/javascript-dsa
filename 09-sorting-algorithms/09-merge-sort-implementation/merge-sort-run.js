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
  

const mergeSort = require('./merge-sort');

const array = generateRandomUniqueArray(10000);
console.time('mergeSort')
const result = mergeSort(array);
console.timeEnd('mergeSort')

console.log(result);

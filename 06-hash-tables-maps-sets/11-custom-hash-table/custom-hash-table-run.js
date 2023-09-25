const HashTable = require('./custom-hash-table');

const hashTable = new HashTable()
// const result = hashTable._hash('John', hashTable.limit)
// console.log(result)
hashTable.set('John', '0612400244')
hashTable.set('James', '0612400245')
hashTable.set('Sara', '0612400246')

console.log(hashTable.get('John'))

hashTable.remove('James')

hashTable.printTable()

console.log(hashTable.get('James'))

console.log(hashTable.has('John'))
console.log(hashTable.has('James'))
hashTable.clear()
hashTable.printTable()
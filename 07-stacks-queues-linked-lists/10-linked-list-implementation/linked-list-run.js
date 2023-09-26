const { LinkedList } = require('./linked-list');

const linkedList = new LinkedList()

linkedList.add(100)
linkedList.add(200)
linkedList.add(300)
// linkedList.add(400)



console.log(linkedList)
console.log(linkedList.get(2))

linkedList.insertAt(1, 150)
console.log(linkedList)
linkedList.printAll()

linkedList.removeFrom(2)
linkedList.printAll()

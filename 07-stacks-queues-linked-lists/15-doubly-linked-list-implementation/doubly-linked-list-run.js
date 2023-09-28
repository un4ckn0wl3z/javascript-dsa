const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList()
list.append(100)
list.append(200)
list.append(300)
list.append(400)
list.prepend(99)

list.insertAt(1, 99.5)

list.printAll()
const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(words) {
    const cleanWords = words.replaceAll('.', '').replaceAll(',', '').replaceAll('!', '')
    const linkedList = new LinkedList()
    let result = ''
    for (let index = cleanWords.length - 1; index >= 0; index--) {
        linkedList.add(cleanWords[index])
    }
    let current = linkedList.head
    while (current != null) {
        result += current.data
        current = current.next
    }
    return result
}

module.exports = reverseStringLinkedList;

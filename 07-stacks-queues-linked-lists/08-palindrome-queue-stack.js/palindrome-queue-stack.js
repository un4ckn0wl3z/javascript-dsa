const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
    const cleanWord = str.replaceAll(' ', '').replaceAll(',', '').replaceAll(':', '').replaceAll('.', '').toLowerCase()
    const stack = new Stack()
    const queue = new Queue()

    for (let i = 0; i < cleanWord.length; i++) {
        queue.enqueue(cleanWord[i])
        stack.push(cleanWord[i])
    }

    while(!queue.isEmpty() && !stack.isEmpty()){
        if(queue.dequeue() === stack.pop()){
            continue;
        }else {
            return false
        }
    }

    return true
}

module.exports = isPalindromeQueueStack;

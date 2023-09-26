const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
    let result = ''
    const q = new Queue()

    for (let index = str.length - 1; index >= 0; index--) {
        q.enqueue(str[index])
    }
   
    while(!q.isEmpty()){
        result += q.dequeue() 
    }

    return result
};

module.exports = reverseStringWithQueue;

const Stack = require('./stack');

function reverseStringStack(str) {
    const stack = new Stack()
    let result = ''

    for (let index = 0; index < str.length; index++) {
        stack.push(str[index])
    }

    while(!stack.isEmpty()){
        result += stack.pop()
    }
    
    return result
}

module.exports = reverseStringStack;

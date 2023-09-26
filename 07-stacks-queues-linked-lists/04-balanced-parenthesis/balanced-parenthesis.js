const Stack = require('./stack');

function balancedParenthesis(str) {
    
    const stack = new Stack()

    for (let index = 0; index < str.length; index++) {
        if (str[index] === '(') {
            stack.push(str[index])
        } 
        if (str[index] === ')') {
            if(stack.isEmpty()) return false
            stack.pop()
        } 
    }

    return stack.isEmpty()
}

module.exports = balancedParenthesis;

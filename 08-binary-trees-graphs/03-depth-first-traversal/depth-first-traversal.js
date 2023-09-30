const Stack = require('./stack');

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

function depthFirstTraversal(root) {
  if (!root) return []

  const result = [];
  const stack = [];

  stack.push(root);

  while (stack.length > 0) {
    const current = stack.pop()

    result.push(current.data)

    if  (current.right) {
      stack.push(current.right)
    }

    if  (current.left) {
      stack.push(current.left)
    }

  }

  return result /* [ 'a', 'b', 'd', 'e', 'c', 'f' ] */

}

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f


// const root = new Node('a')
// const nodeB = new Node('b')
// const nodeC = new Node('c')
// const nodeD = new Node('d')
// const nodeE = new Node('e')
// const nodeF = new Node('f')

// root.left = nodeB
// root.right = nodeC

// nodeB.left = nodeD
// nodeB.right = nodeE

// nodeC.left = nodeF

// const depthFirst = depthFirstTraversal(root)
// console.log(depthFirst)


/**
 * DEPTH-FIRST EXPLAIN
 * 
 * init: push root to stack
 * 
 * step 1: current = stack.pop() | get 'a' from stack
 * 
 * step 2: push 'a' to result
 * 
 * step 3: stack.push(current.right) | push node 'c' to stack
 * 
 * step 4: stack.push(current.left) | push node 'b' to stack
 * 
 * now stack look likes 
 * _____ 
 * | b |
 * |_c_|
 * 
 * and result look likes
 * ____________________
 * a
 * ____________________
 * 
 * step 5: current = stack.pop() | get 'b' from stack
 * 
 * step 6: push 'b' to result
 * 
 * step 7: stack.push(current.right) | push node 'e' to stack
 * 
 * step 8: stack.push(current.left) | push node 'd' to stack
 * 
 * 
 * now stack look likes 
 * _____
 * | d |
 * | e |
 * |_c_|
 * 
 * and result look likes
 * ____________________
 * a, b
 * ____________________
 * 
 * step 9: current = stack.pop() | get 'd' from stack
 * 
 * step 10: push 'd' to result
 * 
 * step 11: d is not has right | ignore push
 * 
 * step 12: d is not has left | ignore push
 * 
 * 
 * now stack look likes 
 * _____
 * | e |
 * |_c_|
 * 
 * and result look likes
 * ____________________
 * a, b, d
 * ____________________
 * 
 * 
 * step 13: current = stack.pop() | get 'e' from stack
 * 
 * step 14: push 'e' to result
 * 
 * step 15: e is not has right | ignore push
 * 
 * step 16: e is not has left | ignore push
 * 
 * 
 * now stack look likes 
 * _____
 * |_c_|
 * 
 * and result look likes
 * ____________________
 * a, b, d, e
 * ____________________
 * 
 * 
 * step 17: current = stack.pop() | get 'c' from stack
 * 
 * step 18: push 'c' to result
 * 
 * step 19: c is not has right | ignore push
 * 
 * step 20: stack.push(current.left) | push node 'f' to stack
 * 
 * 
 * now stack look likes 
 * _____
 * |_f_|
 * 
 * and result look likes
 * ____________________
 * a, b, d, e, c
 * ____________________
 * 
 * 
 * step 21: current = stack.pop() | get 'f' from stack
 * 
 * step 22: push 'f' to result
 * 
 * step 23: f is not has right | ignore push
 * 
 * step 24: f is not has left | ignore push
 * 
 * 
 *  now stack look likes 
 * _____
 * |___|
 * 
 * and result look likes
 * ____________________
 * a, b, d, e, c, f
 * ____________________
 * 
 * 
 * and now stack.length === 0 | ignore loop
 * 
 * return result [ 'a', 'b', 'd', 'e', 'c', 'f' ]
 * 
 */

module.exports = {
  Node,
  depthFirstTraversal,
};

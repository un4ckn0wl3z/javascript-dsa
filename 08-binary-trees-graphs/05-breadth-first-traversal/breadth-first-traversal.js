const Queue = require('./queue');

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

function breadthFirstTraversal(root) {

  if (!root) return []
  
  const result = []
  const queue = new Queue()

  queue.enqueue(root)

  while (!queue.isEmpty()) {

    const current = queue.dequeue()
    result.push(current.data)

    if (current.left) {
      queue.enqueue(current.left)
    }

    if (current.right) {
      queue.enqueue(current.right)
    }


  }


  return result;


}

/**
 * 
 * Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f
*
*
 * breadthFirstTraversal expained
 * 
 * init queue
 * queue.enqueue(root)
 * 
 * step 1: const current = queue.dequeue() | get 'a' node to current
 * step 2: result.push(current.data) | push 'a' to result
 * step 3: queue.enqueue(current.left) | push 'b' node to queue
 * step 4: queue.enqueue(current.right) | push 'c' node to queue
 * 
 * now queue look likes
 * taild ---------------------- head
 *                          c b
 *       ----------------------
 * 
 * and result look likes
 * --------------------
 * a
 * --------------------
 * 
 * 
 * 
 * 
 * 
 * step 5: const current = queue.dequeue() | get 'b' node to current
 * step 6: result.push(current.data) | push 'b' to result
 * step 7: queue.enqueue(current.left) | push 'd' node to queue
 * step 8: queue.enqueue(current.right) | push 'e' node to queue
 * 
 * now queue look likes
 * taild ---------------------- head
 *                          e d c
 *       ----------------------
 * 
 * and result look likes
 * --------------------
 * a b
 * --------------------
 * 
 * 
 * 
 * 
 * step 9: const current = queue.dequeue() | get 'c' node to current
 * step 10: result.push(current.data) | push 'c' to result
 * step 11: queue.enqueue(current.left) | push 'f' node to queue
 * step 12: ignore right node | 
 * 
 * now queue look likes
 * taild ---------------------- head
 *                         f e d 
 *       ----------------------
 * 
 * and result look likes
 * --------------------
 * a b c
 * --------------------
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * step 13: const current = queue.dequeue() | get 'd' node to current
 * step 14: result.push(current.data) | push 'd' to result
 * step 15: ignore left node | 
 * step 16: ignore right node | 
 * 
 * now queue look likes
 * taild ---------------------- head
 *                         f e 
 *       ----------------------
 * 
 * and result look likes
 * --------------------
 * a b c d
 * --------------------
 * 
 * 
 * 
 * 
 * 
 * step 17: const current = queue.dequeue() | get 'e' node to current
 * step 18: result.push(current.data) | push 'e' to result
 * step 19: ignore left node | 
 * step 20: ignore right node | 
 * 
 * now queue look likes
 * taild ---------------------- head
 *                           f 
 *       ----------------------
 * 
 * and result look likes
 * --------------------
 * a b c d, e
 * --------------------
 * 
 * 
 * 
 * 
 * step 21: const current = queue.dequeue() | get 'f' node to current
 * step 22: result.push(current.data) | push 'f' to result
 * step 23: ignore left node | 
 * step 24: ignore right node | 
 * 
 * now queue look likes
 * taild ---------------------- head
 *                           
 *       ----------------------
 * 
 * and result look likes
 * --------------------
 * a b c d e f
 * --------------------
 * 
 * 
 * 
 */

module.exports = {
  Node,
  breadthFirstTraversal,
};

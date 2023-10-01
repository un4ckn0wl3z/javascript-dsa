const { Node, BinarySearchTree } = require('./binary-search-tree');

// Create a binary search tree:
//       10
//      /  \
//     5    15
//    /
//   2

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)

// bst.insert(2)
// bst.insert(3)

bst.printTree()

bst.remove(5)

console.log('*'.repeat(20))

bst.printTree()

// console.log(bst.lookup(5))
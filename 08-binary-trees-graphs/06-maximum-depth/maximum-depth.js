class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

function maxDepth(root) {
  if (!root) return []

  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  const max = Math.max(leftDepth, rightDepth) + 1
  return max

}

module.exports = {
  maxDepth,
  Node,
};

class BinaryTree {
  public root = null;

  public traversePreOrder (node: any) {
    // The base case terminates when the node is null
    if (!node) {
      return;
    }
    this.traversePreOrder(node.left);
    console.log(node.value)
    this.traversePreOrder(node.right);
  }
}
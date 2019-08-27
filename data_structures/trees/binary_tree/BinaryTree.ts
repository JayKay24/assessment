class BinaryTree {
  public root = null;

  public traversePreOrder (node: any) {
    // The base case terminates when the node is null
    if (!node) {
      return;
    }
    console.log(node.value)
    this.traversePreOrder(node.left);
    this.traversePreOrder(node.right);
  }

  public traverseInOrder(node: any) {
    if (!node) {
      return;
    }
    this.traverseInOrder(node.left);
    console.log(node.value);
    this.traverseInOrder(node.right);
  }

  public traversePostOrder(node: any) {
    if (node.left) {
      this.traversePostOrder(node.left);
    }
    if (node.right) {
      this.traversePostOrder(node.right);
    }
    console.log(node.value);
  }
}
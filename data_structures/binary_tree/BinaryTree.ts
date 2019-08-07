class BinaryTree {
  private root = null;

  public traversePreOrder (node: any) {
    // The base case terminates when the node is null
    if (!node) {
      return;
    }
    console.log(node.value)
    this.traversePreOrder(node.left);
    this.traversePreOrder(node.right);
  }
}
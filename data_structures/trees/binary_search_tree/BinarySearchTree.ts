class BinarySearchTree {
  public root = null;

  public insert(value: any) {
    let thisNode = { left: null, right: null, value };
    // if there is no root value yet
    if (!this.root) {
      this.root = thisNode;
    } else {
      let currentRoot = this.root;
      while (true) {
        if (currentRoot.value > value) {
          // let's increment if it's not null and insert if it is null
          if (currentRoot.left != null) {
            currentRoot = currentRoot.left;
          } else {
            currentRoot.left = thisNode;
            break;
          }
        } else if (currentRoot.value < value) {
          //if bigger than current, put it on the right
          //let's increment if it's not a null and insert if it is a null
          if (currentRoot.right != null) {
              currentRoot = currentRoot.right;
          } else {
              currentRoot.right = thisNode;
              break;
          }
        } else {
          // they are both the same
          break;
        }
      }
    }
  }

  public findNode(value: any) {
    let currentRoot = this.root;
    let found = false;

    while (currentRoot) {
      if (currentRoot) {
        if (currentRoot.value > value) {
          currentRoot = currentRoot.left;
        } else if (currentRoot.value < value) {
          currentRoot = currentRoot.right;
        } else {
          // We've found the node
          found = true;
          break;
        }
      }
    }
  }
}
const defaultEquals = (a, b) => {
  return a === b;
}

class SingleNode {
  constructor(public element: any, public next?: any) {}
}

class DoublyNode {
  constructor(
    public element: any,
    public next: any,
    public previous: any) {}
}

export class LinkedList {
  private count: number;
  private head: any;

  constructor(private equalsFn: Function = defaultEquals) {
    this.count = 0;
    this.head = undefined;
  }

  push(element: any) {
    const node = new SingleNode(element);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next !== null || undefined) {
        // get last item
        current = current.next;
      }
      // and assign next to new element to make the link
      current.next = node;
    }
    this.count ++;
  }
}
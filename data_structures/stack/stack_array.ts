class Stack {
  private items: any[];

  constructor() {
    this.items = [];
  }

  public push(e: any) {
    this.items.push(e);
  }

  public pop() {
    return this.items.pop();
  }

  public peek() {
    return this.items[this.items.length - 1];
  }

  public isEmpty() {
    return this.items.length === 0;
  }

  public size() {
    return this.items.length;
  }

  public clear() {
    return this.items = [];
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(5);
stack.push('Ruth');

console.log(stack.peek());
console.log(stack.size());
stack.pop();
console.log(stack.peek());
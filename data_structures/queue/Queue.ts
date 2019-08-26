class Queue {
  public items: object;
  private count: number;
  private lowestCount;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  public enqueue(element: any) {
    this.items[this.count] = element;
    this.count++;
  }

  public dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  public peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  public size() {
    return this.count - this.lowestCount;
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
}
import { Heap } from './Heap';

class MinHeap extends Heap {
  public add(item: any) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  public poll() {
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }

  private bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  private bubbleDown() {
    let index = 0;
    while (this.leftChild(index) && 
      (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])) {
      let smallerIndex = this.leftChildIndex(index);

      if (this.rightChild(index) &&
        (this.rightChild(index) < this.items[smallerIndex])) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(smallerIndex, index);
      index = smallerIndex;
    }
  }
}
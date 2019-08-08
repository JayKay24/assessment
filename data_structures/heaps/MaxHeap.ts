import { Heap } from './Heap';

class MaxHeap extends Heap {
  public poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }

  private bubbleDown() {
    let index = 0;
    while(this.leftChild(index) && 
      (this.leftChild(index) > this.items[index]) || this.rightChild(index) > this.items[index]) {
        let biggerIndex = this.leftChildIndex(index);
        if (this.rightChild(index) && this.rightChild(index) > this.items[biggerIndex]) {
          biggerIndex = this.rightChildIndex(index);
        }
        this.swap(biggerIndex, index);
        index = biggerIndex;
      }
  }

  private bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) < this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }
}
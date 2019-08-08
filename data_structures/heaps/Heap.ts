export class Heap {
  public items = [];

  public swap(index1: number, index2: number) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  public parentIndex(index: number) {
    return Math.floor((index -1) / 2);
  }

  public leftChildIndex(index: number) {
    return index * 2 + 1;
  }

  public rightChildIndex(index: number) {
    return index * 2 + 2;
  }

  public parent(index: number) {
    return this.items[this.parentIndex(index)];
  }

  public leftChild(index: number) {
    return this.items[this.leftChildIndex(index)];
  }

  public rightChild(index: number) {
    return this.items[this.rightChildIndex(index)];
  }

  public peek() {
    return this.items[0];
  }

  public size() {
    return this.items.length;
  }
}
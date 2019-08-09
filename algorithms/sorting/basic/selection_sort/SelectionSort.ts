import { swap } from '../../helper';

const selectionSort = (items: any[]) => {
  let len = items.length, min: number;

  for (let i = 0; i < len; i++) {
    // set minimum to this position
    min = i;

    // check the rest of the array to see if anything is smaller.
    for (let j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    // if the minimum isn't in the position, swap it.
    if (i !== min) {
      swap(items, i, min);
    }
  }
  return items;
};

selectionSort([3, 1, 8, 2]) // [1, 2, 3, 8]
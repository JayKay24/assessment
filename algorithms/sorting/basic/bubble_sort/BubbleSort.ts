import { swap } from '../../helper';

const bubbleSort = (array: any[]) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }

  return array;
};

bubbleSort([5, 4, 3, 2]) //[2, 3, 4, 5]
const quickSort = (array: any[]) => {
  if (array.length === 0) {
    return [];
  }
  let left = [];
  let right = [];
  let pivot = array[0];

  for(let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};
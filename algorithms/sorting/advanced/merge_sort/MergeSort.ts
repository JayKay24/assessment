const merge = (leftArray: any[], rightArray: any[]) => {
  let results = [],
      leftIndex = 0,
      rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      results.push(leftArray[leftIndex++]);
    } else {
      results.push(rightArray[rightIndex++]);
    }
  }

  let leftRemains = leftArray.slice(leftIndex),
      rightRemains = rightArray.slice(rightIndex);

  // add remaining to resultant array
  return results.concat(leftRemains).concat(rightRemains);
};

const mergeSort = (array: any[]) => {
  if (array.length < 2) {
    return array // Base case; array is now sorted as since it's just one element
  }

  let midpoint = Math.floor((array.length / 2));
  const leftArray = array.slice(0, midpoint);
  const rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

mergeSort([6, 2, 5, 3]); // [2, 3, 5, 6]
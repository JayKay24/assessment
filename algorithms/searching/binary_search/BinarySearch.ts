export const binarySearch = (array: any[], n: any) => {
  let lowIndex = 0, highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array[midIndex] === n) {
      return midIndex;
    } else if (n > array[midIndex]) {
      lowIndex = midIndex; 
    } else {
      highIndex = midIndex;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4], 4)) // 3
console.log(binarySearch([1, 2, 3, 4], 5)) // -1
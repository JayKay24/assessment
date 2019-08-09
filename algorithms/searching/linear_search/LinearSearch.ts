export const linearSearch = (array: any[], n: any) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      return true;
    }
  }
  return false;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // true
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // false
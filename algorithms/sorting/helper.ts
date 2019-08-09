export const swap = (array: any[], index1: any, index2: any) => {
  let temp = array[index1];
  array[index1]= array[index2];
  array[index2] = temp; 
};
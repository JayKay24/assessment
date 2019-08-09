const insertionSort = (items: any[]) => {
  let len = items.length,
      value,
      i, // index into unsorted section
      j; // index into sorted section

  for(i = 0; i < len; i++) {
    // store the current value because it may shift later.
    value = items[i];

    // whenever the item in the sorted section is greater than the value in the unsorted
    // section, shift all items in the sorted section over by one. This creates space in
    // which to insert the value.

    for(j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }

  return items;
};

insertionSort([6, 1, 3, 5]) // [1, 3, 5, 6]
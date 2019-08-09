# Binary Search

It's a searching algorithm that works on sorted data. Unlike the [**linear search**](../linear_search/README.md) algorithm in which every element of the array is checked, binary searches can check the middle value to see whether the desired value os greater or smaller than it.

If the desired value is smaller, this algorithm can search through the smaller parts, or it can search through the bigger parts if the desired value is bigger.

The binary search algorithm is fast but can be done only if the array is sorted.

## Time Complexity O(log n)

Each step of the binary search does a constant number of operations and discards half the input. This means for `n` items, log<sub>2</sub>n steps fully reduce the input. As each step involes a fixed number of operations, the algorithm is `O(log n)`

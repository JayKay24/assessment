# Linear Search

A linear search works by going through each element of the array one index after another sequentially.

## Time Complexity O(n)

Given an array:

```Typescript
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

When 6 is searched for, it goes through 6 iterations. When 10 is searched for, it must iterate through all n elements before returning false. Therefore the time complexity is O(n). This makes a linear search ideal when the array is not sorted. If the array is sorted, you can do the search must faster through a [**binary search**](../binary_search/README.md)

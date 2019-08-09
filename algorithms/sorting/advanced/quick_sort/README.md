# Quicksort

Is one of the fastest sorting algorithms for large data sets. Quicksort is a divide and conquer algorithm that recursively breaks a list of data into successively smaller sublists consisting of the smaller elements and the larger elements. The algorithm continues this process until all the data in the list is sorted.

The algorithm divides the list into sublists by selecting one element of the list as a *pivot*. Data is sorted around the pivot by moving elements less than the pivot to the bottom of the list and elements that are greater to the top of the list.

Quicksort is best used on large data sets. It's performance degrades on small data sets.

The algorithm for quicksort is:

1. Pick a pivot element that divides the list into two sublists.

2. Reorder the list so that all elements less than the pivot element are placed before the pivot and all elements greater than the pivot are placed after it.

3. Repeat steps 1 & 2 on both the list with smaller elements and the list of larger elements.

## Time Complexity O(log<sub>2</sub>n)

The sort is a recursive one and uses the divide-and-conquer methodology to get the time complexity to O(Log<sub>2</sub>n)

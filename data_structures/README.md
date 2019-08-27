# Data Structures

Data Structures describe how data is to be organized and accessed in the computers memory. They provide ways for implementing Abstract Data Types in data-handling modules.

Examples of Data Structures include:

1. [**Graphs**](./graphs/README.md)
2. [**Heaps**](./heaps/README.md)
3. [**Trees**](./trees/README.md)
4. **Array** - consists of finding a sequential space in the computer memory and writing your items sequentially in that space, marking the end of the sequence with a special **NULL** token.

   * Each object in the array occupies the same amount of space in memory.
   * Arrays are especially useful for implementing **Stacks**, **Queues** and **Lists**.

    ## Advantages of Arrays

   1. Let's us access any item from the array instantly.

   2. Simple to code

   ## Disadvantages of Arrays

   1. Can be impractical to allocate large amounts of sequential space in memory.

   2. If you need to grow the array, there might not be enough free space adjacent to it in memory.

   3. Removing an item in the middle is problematic; you have to push all subsequent items one step back, or mark the removed item's memory space as "dead".

   4. Adding an item causes you to push all subsequent items forward.

5. [**Linked Lists**](./linked_lists/README.md)

6. **Double Linked List** - are linked lists with an extra; cells have two pointers; one to the cell that came before it, and one to the cell that comes after.

    ## Advantages of Double Linked Lists

    1. The extra pointers let us walk the chain of cells both forwards and backwards.

    ## Disadvantages of Double Linked lists

    1. Storing two pointers in each cell directly translates to more code complexity and more required memory to store our data.
    
# Linked Lists

Items are stored in a chain of cells that don't need to be sequential memory addresses. Memory for each cell is allocated as needed.

  * Each cell has a pointer indicating the address of the next cell in the chain.
  * A cell with an empty pointer marks the end of the chain.
  * They can be used to implement **Stacks**, **Lists** and **Queues**.

  ## Advantages of Linked Lists

  1. There's no problem growing the list; each cell can be kept at any part of memory.

  2. Easy to insert items in the middle, or delete items by changing the cell pointers.

  ## Disadvantages of Linked Lists

  1. We can't instantly retrieve the `nth` item. For that, we have to start searching at the first cell, use it to get to the address of the second cell, then get the second cell, use it's pointer to the next cell and so on until we get to the `nth` cell.

  2. We can't know the address of the previous cell in the chain.
# linked-lists ## Linked List in JavaScript

This is a simple implementation of a singly linked list in JavaScript. The linked list is created using a series of nodes, each of which contains a value and a pointer to the next node in the list.

### Getting Started

To use this linked list, you can import it into your project using the following command:

```
import linkedList from "./linkedList.js";
```

Once you have imported the linked list, you can create a new list using the `create()` function:

```
let list = linkedList.create();
```

### Adding Elements to the List

You can add elements to the list using the `append()` and `prepend()` functions. The `append()` function adds an element to the end of the list, while the `prepend()` function adds an element to the beginning of the list.

To add an element to the end of the list, you can use the following code:

```
list.append(1);
```

To add an element to the beginning of the list, you can use the following code:

```
list.prepend(1);
```

### Accessing Elements in the List

You can access elements in the list using the `at()` function. The `at()` function takes an index as an argument and returns the element at that index in the list.

To access the first element in the list, you can use the following code:

```
let firstElement = list.at(0);
```

### Removing Elements from the List

You can remove elements from the list using the `pop()` and `removeAt()` functions. The `pop()` function removes the last element from the list, while the `removeAt()` function removes the element at the specified index.

To remove the last element from the list, you can use the following code:

```
list.pop();
```

To remove the element at the specified index, you can use the following code:

```
list.removeAt(0);
```

### Searching for Elements in the List

You can search for elements in the list using the `contains()` and `find()` functions. The `contains()` function returns `true` if the list contains the specified element, and `false` otherwise. The `find()` function returns the index of the first occurrence of the specified element in the list, or `false` if the element is not found.

To search for an element in

Generated by [BlackboxAI](https://www.useblackbox.ai)
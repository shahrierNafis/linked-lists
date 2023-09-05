// Import the linkedList module
import linkedList from "./linkedList.js";

// Create a new linked list
let list = linkedList.create();

// Add numbers from 2 to 9 to the linked list
let i = 2;
while (i < 10) {
  list.append(i);
  i++;
}

console.log("list: " + list.toString());

// Prepend 1 to the linked list and print it
list.prepend(1);
console.log("list.prepend(1)\n" + "list: " + list.toString());

// Print the updated linked list and its size, head value, tail value, and value at index 1
console.log("list.size: " + list.size);
console.log("list.head.value: " + list.head.value);
console.log("list.tail.value: " + list.tail.value);
console.log("list.at(1).value: " + list.at(1).value);

// Remove the last element from the linked list and print the updated list
console.log("list.pop() ");
list.pop();
console.log(list.toString());

// Append 9 to the linked list and check if it contains the values 2 and 10
list.append(9);
console.log(
  "list.contains(2): " + list.contains(2) + " at index " + list.find(2)
);
console.log(
  "list.contains(10): " + list.contains(10) + " list.find(10): " + list.find(10)
);

// Insert 0 at index 0 and remove the element at index 2 from the linked list
list.insertAt(0, 0);
console.log("list.insertAt(0, 0)\n" + list.toString());
list.removeAt(2);
console.log("list.removeAt(2)\n" + list.toString());

// Create a new linked list and add numbers 1, 2, 3, 3 to it
let list2 = linkedList.create();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(3);
console.log("list2: " + list2.toString());


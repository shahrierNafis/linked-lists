import Node from "./node.js";

/**
 * Creates a new linked list.
 * @returns {Object} - The linked list object.
 */
function create() {
  let node = Node.create();
  let size = 0;
  let tail;

  /**
   * Appends a new node with the given value to the linked list.
   * @param {any} value - The value to be added to the linked list.
   */
  function append(value) {
    size += 1;
    let currentNode = node;

    if (!currentNode.value) {
      currentNode.value = value;
      tail = currentNode;
      return;
    }

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = Node.create(value);
    tail = currentNode.nextNode;
  }

  /**
   * Prepend a new node with the given value to the linked list.
   * @param {*} value - The value to be added to the linked list.
   */
  function prepend(value) {
    //increase list size
    size += 1;

    //unshift node
    node.nextNode = Node.create(node.value, node.nextNode);
    //add value to root
    node.value = value;
  }

  /**
   * Returns the node at the specified index.
   *
   * @param {number} index - The index of the node to retrieve.
   * @returns {Node} - The node at the specified index.
   */
  function at(index) {
    let currentNode = node;
    index++;

    while (index && currentNode) {
      --index;

      if (!index) {
        return currentNode;
      }

      currentNode = currentNode.nextNode; // Move to the next node
    }
  }

  /**
   * Removes the last node from the linked list.
   */
  function pop() {
    let tailParent = node;

    while (tailParent.nextNode.nextNode) {
      tailParent = tailParent.nextNode;
    }

    // Remove the tail node
    tailParent.nextNode = null;
  }

  /**
   * Check if the linked list contains a given value.
   * @param {any} value - The value to search for.
   * @returns {boolean} - True if the value is found, false otherwise.
   */
  function contains(value) {
    //return true if value is found
    return Boolean(find(value));
  }

  /**
   * Find the index of the first occurrence of a given value in the linked list.
   * @param {any} value - The value to search for.
   * @returns {number|boolean} - The index of the value if found, false otherwise.
   */
  function find(value) {
    // Start at the head node
    let currentNode = node;
    let index = 0;

    while (currentNode) {
      // If the value is found, return true
      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.nextNode;
      index++;
    }

    // Value not found, return false
    return false;
  }

  /**
   * Convert the linked list to a string representation.
   * @returns {string} - The string representation of the linked list.
   */
  function toString() {
    let currentNode = node;
    let string = "";

    while (currentNode) {
      string += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    //return string without the last arrow
    return string.slice(0, -4);
  }

  /**
   * Insert a new node with the given value at the specified index.
   * @param {any} value - The value to be inserted.
   * @param {number} index - The index at which to insert the value.
   */
  function insertAt(value, index) {
    size++;
    let currentNode = at(index);
    currentNode.nextNode = Node.create(currentNode.value, currentNode.nextNode);
    currentNode.value = value;
  }

  /**
   * Remove the node at the specified index from the linked list.
   * @param {number} index - The index of the node to remove.
   */
  function removeAt(index) {
    size--;
    let currentNode = at(index);
    currentNode.value = currentNode.nextNode.value;
    currentNode.nextNode = currentNode.nextNode.nextNode;
  }

  return {
    append,
    prepend,
    get size() {
      return size;
    },
    get head() {
      return node;
    },
    get tail() {
      return tail;
    },
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

export default { create };

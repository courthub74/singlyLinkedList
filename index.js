//Singly Linked List

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  getNodeAtIndex(index) {
    if (index >= this.length || index < 0) return null; //if index is outside of list, its irrelevant
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentNode = currentNode.next; //keeps searching for the correct index
      currentIndex++;
    }
    return currentNode;
  }

  pop() {
    if (!this.tail) {
      return false;
    }
    const poppedNode = this.tail;
    if (this.head !== this.tail) {
      const newTail = this.getNodeAtIndex(this.length - 2);
      newTail.next = null;
      this.tail = newTail;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return poppedNode;
  }

  insertAtIndex(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    const newNode = new Node(value);
    const after = this.getNodeAtIndex(index);
    const before = this.getNodeAtIndex(index - 1);
    newNode.next = after;
    before.next = newNode;

    this.length++;
    return this;
  }

  setNodeAtIndex(value, index) {
    const foundNode = this.getNodeAtIndex(index);
    if (foundNode) {
      foundNode.value = value;
      return foundNode;
    }
    return null;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const before = this.getNodeAtIndex(index - 1);
    before.next = removedNode.next;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  print() {
    console.log('HEAD:', this.head);
    console.log('TAIL:', this.tail);
    console.log('SIZE:', this.length);
    // console.log(JSON.stringify(this, null, 2));
  }
}

let list = new LinkedList();

list.push('One');

console.log(list.print());

list.push('Two');

console.log(list.print());

list.push('Three');

console.log(list.print());

list.push('Four');

console.log(list.print());

list.push('Five');

console.log(list.print());

list.push('Six');

console.log(list.print());

list.push('Seven');

console.log(list.print());

list.push('Eight');

console.log(list.print());

list.push('Nine');

console.log(list.print());

list.push('Ten');

console.log(list.print());

list.push('Eleven');

console.log(list.print());

list.setNodeAtIndex('Eleven-Change', 10);

console.log(list.print());

list.push('Get Out');

console.log(list.print());

list.removeFrom(11);

console.log(list.print());

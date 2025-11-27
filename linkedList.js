import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // ------------------------
  // BASIC METHODS
  // ------------------------

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;

    while (current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;

    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    let current = this.headNode;
    let i = 0;

    while (current !== null) {
      if (i === index) return current;
      current = current.nextNode;
      i++;
    }

    return null;
  }

  pop() {
    if (!this.headNode) return null;

    // Caso exista só 1
    if (this.headNode.nextNode === null) {
      this.headNode = null;
      return;
    }

    let current = this.headNode;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = null;
  }

  contains(value) {
    let current = this.headNode;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let current = this.headNode;
    let str = "";

    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return str + "null";
  }

  // ------------------------
  // EXTRA CREDIT
  // ------------------------

  insertAt(value, index) {
    if (index < 0 || index > this.size()) return null;

    // Inserir no início
    if (index === 0) {
      this.prepend(value);
      return;
    }

    // Inserir no final
    if (index === this.size()) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.headNode;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.nextNode;
      i++;
    }

    previous.nextNode = newNode;
    newNode.nextNode = current;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) return null;

    // Remover primeiro
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let current = this.headNode;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.nextNode;
      i++;
    }

    previous.nextNode = current.nextNode;
  }
}
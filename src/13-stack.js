/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.length = 0;
    this.array = [];
  }

  push(element) {
    this.array[this.length] = element;
    this.length++;
  }

  pop() {
    this.length--;
    return this.array[this.length];
  }

  peek() {
    return this.array[this.length - 1];
  }
}

module.exports = Stack;

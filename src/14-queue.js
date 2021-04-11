const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  get size() {
    let lengthOfQueue = 0;
    if (this.first == null) return lengthOfQueue;
    let tempElement = this.first;
    while (tempElement !== null) {
      lengthOfQueue++;
      tempElement = tempElement.next;
    }
    return lengthOfQueue;
  }

  enqueue(element) {
    const tempElement = new ListNode(element);

    if (this.first == null) {
      this.first = tempElement;
      this.last = tempElement;
      return;
    }
    this.last.next = tempElement;
    this.last = tempElement;
  }

  dequeue() {
    if (this.first == null) return null;
    const firstValue = this.first.value;
    if (this.first == null) this.last = null;
    else this.first = this.first.next;

    return firstValue;
  }
}

module.exports = Queue;

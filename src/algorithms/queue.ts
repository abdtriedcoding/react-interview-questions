class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Method to add an element to the queue
  enqueue(element: T): void {
    this.items.push(element);
  }

  // Method to remove the first element from the queue and return it
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // Method to return the first element of the queue without removing it
  front(): T | undefined {
    return this.items[0];
  }

  // Method to check if the queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Method to return the size of the queue
  size(): number {
    return this.items.length;
  }

  // Method to clear the queue
  clear(): void {
    this.items = [];
  }

  // Method to print the elements of the queue
  print(): void {
    console.log(this.items);
  }
}

// Example usage
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: [1, 2, 3]
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
queue.clear();
console.log(queue.isEmpty()); // Output: true

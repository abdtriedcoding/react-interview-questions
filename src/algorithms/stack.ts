class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Method to add an element to the stack
  push(element: T): void {
    this.items.push(element);
  }

  // Method to remove the top element from the stack and return it
  pop(): T | undefined {
    return this.items.pop();
  }

  // Method to return the top element of the stack without removing it
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Method to check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Method to return the size of the stack
  size(): number {
    return this.items.length;
  }

  // Method to clear the stack
  clear(): void {
    this.items = [];
  }

  // Method to print the elements of the stack
  print(): void {
    console.log(this.items);
  }
}

// Example usage
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // Output: [1, 2, 3]
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
stack.clear();
console.log(stack.isEmpty()); // Output: true

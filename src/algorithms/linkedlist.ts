class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Method to add elements to the linked list
  add(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Method to remove elements from the linked list
  remove(data: T): void {
    let current = this.head;
    let prev: Node<T> | null = null;

    while (current !== null) {
      if (current.data === data) {
        if (!prev) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  // Method to print the elements of the linked list
  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1 2 3
list.remove(2);
list.print(); // Output: 1 3

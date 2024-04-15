class MinHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  insertKey(key: number): void {
    this.heap.push(key);
    let i = this.heap.length - 1;
    while (i !== 0 && this.heap[this.parent(i)] > this.heap[i]) {
      [this.heap[this.parent(i)], this.heap[i]] = [
        this.heap[i],
        this.heap[this.parent(i)],
      ];
      i = this.parent(i);
    }
  }

  decreaseKey(i: number, new_val: number): void {
    this.heap[i] = new_val;
    while (i !== 0 && this.heap[this.parent(i)] > this.heap[i]) {
      [this.heap[this.parent(i)], this.heap[i]] = [
        this.heap[i],
        this.heap[this.parent(i)],
      ];
      i = this.parent(i);
    }
  }

  extractMin(): number | null {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }
    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.minHeapify(0);
    return root;
  }

  minHeapify(i: number): void {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;
    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.minHeapify(smallest);
    }
  }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insertKey(3);
minHeap.insertKey(2);
minHeap.insertKey(1);
console.log(minHeap.heap); // Output: [1, 3, 2]
minHeap.extractMin();
console.log(minHeap.heap); // Output: [2, 3]

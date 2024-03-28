function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Element found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Element not found
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const index = binarySearch(arr, target);
console.log(`Index of ${target} is ${index}`);

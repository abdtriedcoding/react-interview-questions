function binarySearchInfiniteArray(arr: number[], target: number): number {
  let left = 0;
  let right = 1;

  // Expand the search range until the target is within the range
  while (arr[right] < target) {
    const temp = right;
    right = 2 * right;
    if (temp === right) {
      // If right has reached the maximum possible value, return -1
      return -1;
    }
    left = temp;
  }

  // Perform binary search within the range
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
const arr = [1, 3, 5, 7, 9, 11, 13, 15,...]; // Infinite sorted array
const target = 7;
const index = binarySearchInfiniteArray(arr, target);
console.log(`Index of ${target} is ${index}`);
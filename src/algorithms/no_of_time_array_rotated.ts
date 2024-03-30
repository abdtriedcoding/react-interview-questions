function isRotatedSortedArray(arr: number[]): boolean {
  let decreases = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      decreases++;
    }
  }
  return decreases <= 1;
}

console.log(isRotatedSortedArray([4, 5, 1, 2, 3])); // true
console.log(isRotatedSortedArray([1, 2, 3, 4, 5])); // false
console.log(isRotatedSortedArray([3, 4, 5, 1, 2])); // true
console.log(isRotatedSortedArray([30, 20, 10, 100, 33, 12])); // true

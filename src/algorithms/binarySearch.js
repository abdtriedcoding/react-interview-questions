function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Element found
        }
        else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        }
        else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Element not found
}
// Example usage:
var arr = [1, 3, 5, 7, 9, 11, 13, 15];
var target = 7;
var index = binarySearch(arr, target);
console.log("Index of ".concat(target, " is ").concat(index));

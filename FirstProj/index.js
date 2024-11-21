//Creating own npm package and host it on npm site
/**
* Performs binary search on a sorted array.
* @param {Array<number|string>} arr - The sorted array to search in.
* @param {number|string} target - The element to search for.
* @returns {number} - The index of the target element, or -1 if not found.
* @throws {Error} - If the input array is not sorted.
*/
function binarySearch(arr, target) {
 if (!Array.isArray(arr)) {
   throw new Error('Input must be an array.');
 }

 if (!isSorted(arr)) {
   throw new Error('Array must be sorted for binary search.');
 }

 let left = 0;
 let right = arr.length - 1;

 while (left <= right) {
   const mid = Math.floor((left + right) / 2);
   if (arr[mid] === target) {
     return mid; // Target found
   }
   if (arr[mid] < target) {
     left = mid + 1; // Search in the right half
   } else {
     right = mid - 1; // Search in the left half
   }
 }

 return -1; // Target not found
}

/**
* Checks if an array is sorted.
* @param {Array<number|string>} arr - The array to check.
* @returns {boolean} - True if the array is sorted, false otherwise.
*/
function isSorted(arr) {
 for (let i = 1; i < arr.length; i++) {
   if (arr[i] < arr[i - 1]) {
     return false;
   }
 }
 return true;
}

module.exports = { binarySearch };
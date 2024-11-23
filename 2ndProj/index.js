// Array Utilities Package

// 1. Sum of Array
const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);

// 2. Remove Duplicates
const removeDuplicates = (arr) => [...new Set(arr)];

// 3. Find Max Value
const max = (arr) => Math.max(...arr);

// 4. Find Min Value
const min = (arr) => Math.min(...arr);

// 5. Average of Array
const average = (arr) => sum(arr) / arr.length;

// 6. Flatten Nested Arrays
const flatten = (arr) => arr.flat(Infinity);

// 7. Find Even Numbers
const findEvens = (arr) => arr.filter((num) => num % 2 === 0);

// 8. Find Odd Numbers
const findOdds = (arr) => arr.filter((num) => num % 2 !== 0);

// 9. Chunk Array
const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

// 10. Sort Array in Ascending Order
const sortAsc = (arr) => [...arr].sort((a, b) => a - b);

module.exports = {
    sum,
    removeDuplicates,
    max,
    min,
    average,
    flatten,
    findEvens,
    findOdds,
    chunk,
    sortAsc,
};

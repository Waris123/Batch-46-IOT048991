/*

Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program.
*/

const numbers = [1, 2, 3, 4, 5];

// Trying to access an element at index 10, which is out of bounds
console.log(numbers[10]);

// The above line will produce an "IndexError" or "TypeError" because the index is out of bounds

// Correcting the error by accessing a valid index
console.log(numbers[2]);
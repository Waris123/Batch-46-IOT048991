/*

More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result for 
each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

// Tests for equality and inequality with strings:
let name1 = "John";
let name2 = "Jane";

console.log(name1 === name2); // False
console.log(name1 !== name2); // True
console.log("-------------------------------------");

// Tests using the lower case function:
const str1 = "Hello";
const str2 = "hello";

console.log(str1.toLowerCase() === str2.toLowerCase()); // True
console.log(str1.toLowerCase() !== str2.toLowerCase()); // False
console.log("-------------------------------------");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:const num1 = 10;
let num1 = 10;
let num2 = 5;

console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
console.log("-------------------------------------");


//Tests using "and" and "or" operators:
const age = 25;
const hasLicense = true;

console.log(age >= 18 && hasLicense); // True
console.log(age >= 18 || hasLicense); // True
console.log("-------------------------------------");


// Test whether an item is in an array:
const fruits = ["apple", "banana", "orange"];


console.log(fruits.indexOf("banana") !== -1) // True
console.log(fruits.indexOf("grape") !== -1) // False
console.log("-------------------------------------");

// Test whether an item is not in an array:
const colors = ["red", "green", "blue"];


console.log(!(colors.indexOf("yellow") !== -1)) // True
console.log(!(colors.indexOf("red") !== -1)) // False

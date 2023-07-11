/*

They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.
*/

// Define the types of the items
type ItemType = "book" | "car" | "phone";

// Define the Item interface
interface Item {
  name: string;
  type: ItemType;
  price: number;
}

// Create objects containing items
const item1: Item = {
  name: "Halim",
  type: "book",
  price: 15.99,
};

const item2: Item = {
  name: "Corrola X",
  type: "car",
  price: 80000,
};

const item3: Item = {
  name: "Realme C3",
  type: "phone",
  price: 2000,
};

// Print the objects
console.log(item1);
console.log(item2);
console.log(item3);
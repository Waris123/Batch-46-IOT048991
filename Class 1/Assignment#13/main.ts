/*
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
and make a list that stores several examples. Use your list 
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/


// Create an array of favorite modes of transportation
var transportation = ["car", "motorcycle", "bicycle", "train"];

// Iterate over each item in the array
for (var i = 0; i < transportation.length; i++) {
  var item = transportation[i];

  // Print a statement about each item
  console.log("I would like to own a " + item + ".");
}
/*
#16
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/


// Create an array of people to invite
var guestList = ["Allama M. Iqbal", "Qaid E Azam", "Dr. Abdul Qadeer Khan"];

console.log("Dear all you are invited to dinner. Please join us! and table has more space we are inviting more guests");

// Add a new guest to the beginning of the array
guestList.unshift("Shahid Khan Afridi");

// Add a new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Imran Khan");

// Add a new guest to the end of the array using push() 
// Apologies for the confusion. In JavaScript, there is no built-in append() method for arrays. 
// However, you can achieve the desired result by using the push() method. 
// Here's an updated example using push() to add a new guest to the end of the array:
guestList.push("M Waris Anjum");

// Iterate over each person in the guest list
for (var i = 0; i < guestList.length; i++) {
  var person = guestList[i];

  // Print an invitation message to each person
  console.log("Dear " + person + ", you are invited to dinner. Please join us! and table has more space we are inviting more guests");
}
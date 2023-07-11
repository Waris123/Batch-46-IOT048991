/*
#15

Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program 
stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the 
new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/


// Create an array of people to invite
var guestList = ["Allama M. Iqbal", "Qaid E Azam", "Dr. Abdul Qadeer Khan"];
console.log(guestList[1] + ", this guest is not coming, having some urgent work, so we are inviting another guest.");

guestList[1] = "Muhtarma Fatima Jinnah";

// Iterate over each person in the guest list
for (var i = 0; i < guestList.length; i++) {
  var person = guestList[i];

  // Print an invitation message to each person
  console.log("Dear " + person + ", you are invited to dinner. Please join us!");
}
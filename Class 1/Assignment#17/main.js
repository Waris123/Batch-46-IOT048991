/*
#17

Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them know you’re
sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.
*/
// Create an array of people to invite
var guestList = ["Allama M. Iqbal", "Qaid E Azam", "Dr. Abdul Qadeer Khan"];
// Print a message indicating that only two people can be invited
console.log("Sorry, we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, " + removedGuest + ", but we can't invite you to dinner.");
}
// Print messages to the two remaining guests
// Iterate over each person in the guest list
for (var i = 0; i < guestList.length; i++) {
    // Print an invitation message to each person
    console.log("Dear " + guestList[i] + ", you're still invited to dinner.");
}
for (var i = 0; i <= guestList.length; i++) {
    // Remove the last two names from the list
    guestList.pop();
}
// Print the empty guest list
console.log("Updated Guest List:", guestList);

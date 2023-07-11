/*

Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

*/
// Create an array of people to invite
var guestList = ["Allama M. Iqbal", "Qaid E Azam", "Dr. Abdul Qadeer Khan"];
// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
}
// Print the empty guest list
console.log("Total number of Guest:", guestList.length);

/*

Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
// Create an array of people to invite
var guestList = ["Allama M. Iqbal", "Qaid E Azam", "Dr. Abdul Qadeer Khan"];
// Iterate over each person in the guest list
for (var i = 0; i < guestList.length; i++) {
    var person = guestList[i];
    // Print an invitation message to each person
    console.log("Dear " + person + ", you are invited to dinner. Please join us!");
}

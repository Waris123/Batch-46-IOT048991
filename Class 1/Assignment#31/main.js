/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var usernames = ['Eric', 'Waris', 'admin', 'Wajid', 'admin123', 'Majid'];
var count = usernames.length;
for (var i = 0; i < count; i++) {
    usernames.pop();
}
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log(usernames);
}

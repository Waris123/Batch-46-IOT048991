/*

Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, 
print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

// List of current usernames
let current_users = ['John', 'Amy', 'Mike', 'Sara', 'Tom'];

// List of new usernames
let new_users = ['Amy', 'Peter', 'mike', 'Sarah', 'Jack'];

// Convert the current usernames to lowercase for case-insensitive comparison
let lowercased_current_users = current_users.map(username => username.toLowerCase());

// Loop through each new username
for (let i = 0; i < new_users.length; i++) {
  let new_username = new_users[i];
  let lowercased_new_username = new_username.toLowerCase();

  // Check if the new username is already in use
  
  if (lowercased_current_users.indexOf(lowercased_new_username) === -1) {
    console.log(`The username "${new_username}" is available`);
  } else {
    console.log(`The username "${new_username}" is already taken. Please choose a different username.`);
  }
}

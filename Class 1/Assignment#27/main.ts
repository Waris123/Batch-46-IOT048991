/*

Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

var alien_color = 'green';

// If Block
if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}else{
  console.log("Congratulations! You just earned 10 points.");
}

// Else Block
if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 5 points.");
}else{
  console.log("Congratulations! You just earned 10 points.");
}

// Else If Block
if (alien_color === 'red') {
  console.log("Congratulations! You just earned 5 points.");
}else if (alien_color === 'red' || 1) {
  console.log("Congratulations! You just earned 15 points.");
}else{
  console.log("Congratulations! You just earned 10 points.");
}
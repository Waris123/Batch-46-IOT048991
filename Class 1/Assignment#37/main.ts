/*

Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.
*/

function make_shirt(size = 'Large', message = 'I love TypeScript') {
  console.log("Size: " + size);
  console.log("Message: " + message);
  console.log("T-Shirt created!");
}

// Creating a large shirt with the default message
make_shirt();

// Creating a medium shirt with the default message
make_shirt('Medium');

// Creating a small shirt with a different message
make_shirt('Small', 'The specifications for the Prime Minister (PM) Laptop Scheme 2023');

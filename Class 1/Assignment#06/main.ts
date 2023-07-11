/* 
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and 
end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around the name is displayed. Then print the name after 
striping the white spaces.
*/


// Store the person's name with whitespace characters
let my_name = "\t  Waris Anjum\n Shaikh";

// Print the name with whitespace
console.log("Name with whitespace: " + my_name);

// Strip the whitespace from the name
let strippedName = my_name.trim();

// Print the stripped name
console.log("Stripped name: " + strippedName);


/* 
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.
*/

let person_name = 'Muhammad Waris Anjum';

// Storing lowercase
let toLowerCase = person_name.toLowerCase(); 
console.log(toLowerCase);

// Storing uppercase
let toUpperCase = toLowerCase.toUpperCase(); 
console.log(toUpperCase);

// Storing titlecase
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  
   let titlecase = titleCase(toUpperCase);
   console.log(titlecase);



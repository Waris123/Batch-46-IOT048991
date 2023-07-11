/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.
*/
var person_name = 'Muhammad Waris Anjum';
// Storing lowercase
var toLowerCase = person_name.toLowerCase();
console.log(toLowerCase);
// Storing uppercase
var toUpperCase = toLowerCase.toUpperCase();
console.log(toUpperCase);
// Storing titlecase
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
var titlecase = titleCase(toUpperCase);
console.log(titlecase);

/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.
*/
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    show_magicians(magicians);
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician's names
var magicians = ['ainak wala jin', 'hamoon jadogar', 'binbatori', 'zakota'];
// Calling the show_magicians() function with the magician's array
make_great(magicians);

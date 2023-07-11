/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.
*/

function show_magicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

// Array of magician's names
let magicians: string[] = ['ainak wala jin', 'hamoon jadogar', 'binbatori', 'zakota'];

// Calling the show_magicians() function with the magician's array
show_magicians(magicians);

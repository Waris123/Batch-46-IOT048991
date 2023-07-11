/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy 
of the array of magicians’ names. Because the original array will be unchanged, return the new array 
and store it in a separate array. Call show_magicians() with each array to show that you have one array of 
the original names and one array with the Great added to each magician’s name.
*/

function make_great(magicians: string[]): void {
  let make_great: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
      make_great[i] = "The Great " + magicians[i];
  }
  show_magicians(magicians, make_great);

}


function show_magicians(magicians: string[], make_great: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i] + " : " + make_great[i]);
  }
}

// Array of magician's names
let magicians: string[] = ['ainak wala jin', 'hamoon jadogar', 'binbatori', 'zakota'];

// Calling the show_magicians() function with the magician's array
make_great(magicians);



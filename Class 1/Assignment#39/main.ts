/*

City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/

function city_country(city, country) {
  return city + ', ' + country;
}

// Calling the city_country() function with different city-country pairs
var city1 = city_country('Lahore', 'Pakistan');
var city2 = city_country('Tokyo', 'Japan');
var city3 = city_country('Paris', 'France');

// Printing the returned values
console.log(city1);
console.log(city2);
console.log(city3);


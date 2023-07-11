/*

Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
country a default value. Call your function for three different cities, at least one of which is not in 
the default country.
*/

function describe_city(city, country = 'USA') {
  console.log(city + ' is in ' + country + '.');
}

// Calling the describe_city() function for different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York');
describe_city('London', 'United Kingdom');

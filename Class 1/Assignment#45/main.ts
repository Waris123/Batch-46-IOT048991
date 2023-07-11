/*
Cars: Write a function that stores information about a car in a Object. The function should always receive 
a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an 
optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

function store_car_info(manufacturer: string, model: string, ...kwargs: any[]): object {
  let carInfo: object = {
    manufacturer: manufacturer,
    model: model,
  };

  // Loop through the keyword arguments and add them to the carInfo object
  for (let i = 0; i < kwargs.length; i += 2) {
    const key = kwargs[i];
    const value = kwargs[i + 1];
    carInfo[key] = value;
  }

  return carInfo;
}

// Calling the store_car_info() function with required information and additional name-value pairs
const carInfo = store_car_info('Toyota', 'Camry', 'color', 'Red', 'year', 2022);

// Printing the returned object
console.log(carInfo);

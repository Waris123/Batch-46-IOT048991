/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.
*/
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich items: " + items.join(", "));
}
// Calling the order_sandwich() function with different number of arguments
order_sandwich('Ham', 'Cheese');
order_sandwich('Turkey', 'Lettuce', 'Tomato');
order_sandwich('Chicken', 'Bacon', 'Avocado', 'Mayo');

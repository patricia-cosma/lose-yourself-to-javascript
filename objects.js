// object literal syntax: {}
// to be able to access this object literal, it is common to assign it to a variable
var assistantManager = { //imagine declaring the variable assistantManager to assign the object's properties for a player in a new restaurant game, delimited as key-value pairs
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: 'young and ambitious',
    greeting: "Let's make some money"
}
console.log (assistantManager.health); // access any individual property, in this case the health property
console.log (assistantManager); // or access and display the entire object


// alternative approach of building objects
var house = {} // save an empty object literal to a variable
// dot notation
house.rooms = 4;
house.color = 'brown';
house.priceUSD = 10000;

console.log (house);
house.windows = 10; // add new properties to the object
console.log (house);
house.windows = 11; // or update existing ones
console.log (house); // now when running the code, for the hourse property we'll have 11, not 10
delete house.color; // this will delete the color property of the object
console.log (house);

// brackets notation
var bike = {};
bike.color = 'orange';
bike['color'] = 'green'; // with brackets notation, we have to use ' ' or " "
bike['speed'] = 2;
bike.speed = 3;
console.log (bike); // { color: 'green', speed: 3 }
// with brackets notation, you can add space characters inside property name
bike['numbers of accessories'] = 4;
console.log (bike); // { color: 'green', speed: 3, 'numbers of accessories': 4 }
// you can also add numbers as string data type as property keys, but that's discuraged, as it doesn't convey a lot of useful information
bike['2022'] = 20;
console.log (bike); // { '2022': 20, color: 'green', speed: 3, 'numbers of accessories': 4 }

// brackets vs dot notion: brackets notion can evaluate expressions
var tulips = ['color', 'bouquets', 'type'];
var supply = {
    color: 'orange',
    bouquets: 50,
    type: 3
}
for (var i = 0; i < tulips.length; i++) {
    console.log(supply[tulips[i]])
    //orange
    //50
    //3
}
// Using the fact that brackets notation can evaluate expressions, the arrOfKeys[i] property was accessed on the supply object. 
// This value changed on each loop while the for loop was running
// i = 0 then tulips[i] became tulips[0] which is color => supply[tulips[0]] became supply[color] which is 'orange'

// object methods
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car); // { mileage: 98765, color: 'red' }
car.turnTheKey = function() { // this function is called a method
    console.log("The engine is running") // this log method will only run if it is accessed through the console object car; here, it won't run
}
console.log(car); // { mileage: 98765, color: 'red', turnTheKey: [Function (anonymous)] }
// check the example below to see how the function can run

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car); // {mileage: 98765, color: 'red'}
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car); // {mileage: 98765, color: 'red', turnTheKey: ƒ, lightsOn: ƒ}
car.turnTheKey(); // as it was accessed through the console object it will run ok: The engine is running
car.lightsOn(); // The lights are on.

// typeof operator
// this operator accepts and evaluates a parameter and returns the name of the data type represented as a string
var test0 = typeof ('what is this?'); // string
var test1 = typeof (19); // number
var test2 = typeof (3.24); // number
var test3 = typeof (true); // boolean
var test4 = typeof (false); // boolean
var test5 = typeof (1 < 3); // boolean
var test6 = typeof ([1,2,3]); // object (cause arrays in JS are actually objects)
var test7 = typeof ({firstProperty: 1}); // object
var test8 = typeof (function abc() { console.log('abc')}); // function
console.log (test0); // replace the number to test each var)

// random method is a part of the Math object that can generate a decimal numebr between 0 and 0.99
Math.random(); // generate a decimal number between 0 and 0.99
var decimal = Math.random (); // save it to a variable
console.log (decimal); // log the value of decimal to the console
console.log (decimal * 10); // in case you wanr a number bigger than 1, this logs the value of decimal multiplied by 10

// ceil method is a part of the Math object that rounds a decimal up to the nearest integer
// this method can only round upwards
var rounded = Math.ceil (0.001); // it'll output 1; the same for 0.5, 0.99
var rounded1 = Math.ceil (1.01); // 2; 1.5 will be 2 as well
console.log (rounded);
console.log (rounded1);

// random integer
var decimal = Math.random () * 10; // get a random decimal number (0-0.99) and save it to a variable
var rounded = Math.ceil (decimal); // rounding up the value of decimal
console.log (rounded); // log the value of rounded to the console
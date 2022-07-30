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
console.log (assistantManager.health); // access any individual property
console.log (assistantManager); // or access the entire object


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
// Using the fact that brackets notation can evaluate expressions, the arrOfKeys[i] property was accessed on the drone object. 
// This value changed on each loop while the for loop was running
// i = 0 then tulips[i] became tulips[0] which is color => supply[tulips[0]] became supply[color] which is 'orange'
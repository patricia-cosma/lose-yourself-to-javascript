// array literal syntax []
// [] - inside the brackets we provide a collection of items
// values in an array are all part of a group, are set in a specific sequence
// in JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods (push, pop)

// imagine a train with 4 different carriage
var train1 = ["wheat", "barley", "potato", "salt", "rocks"];

// behind the scenes, JavaScript gives each item a number, starting from 0
// values inside the array can be access with their index numbers: namevar[no]

var colors = ["red", "blue", "green", "yellow"];
console.log (colors[0]); // displays red
console.log (colors[1]); // displays blue
console.log (colors[2]); // displays green
console.log (colors[3]); // displays yellow
colors.pop (); // removes the last item of the array, in our case 'yellow'
colors.push ('orange'); // add an element to the end of the array
console.log (colors[4]); // displays orange
colors.unshift('brown'); // add an element in the begining of the array
console.log (colors[0]); // displays brown, which is now the first value of the array

//building & calling functions with arrays inside
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) { //setting the value of i to 0 so there is a one-to-one mapping of the current value of i at any given time, corresponding to the same index position of any item in the array
        console.log(i+1, arr[i]) // i+1, so that the counting in front of the color starts at 1
    }
} // the exit condition is met when i < arr.length returns false (in our case, when i = 7 the function is not met)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

// array as objects in JS
function library (one, two, three) { // build a function that takes all its arguments and pushes them into an array
    var shelf= []; // array
    shelf.push(one); // push for 'one' ot create it as the first item in the array
    shelf.push(two);
    shelf.push(three);
    return shelf; // the function will stop executing when return is called
}
var newPurchase = library ('Agatha Christie', 'Stephen King', 'Matt Haig'); // you can assign the entire array to a new variable (optional)
console.log (newPurchase); // ['Agatha Christie', 'Stephen King', 'Matt Haig']

// arrays, as well as strings, are iterable; however, strings !==arrays
// for loops can work on both arrays and strings
var greet = "Hello, ";
var user = "Monica";
//console.log (greet.pop()); - it won't work for strings
console.log (greet + user); // Hello, Monica
console.log (greet.concat(user)); // Hello, Monica
// the + operator, when used on strings, acts as a concatenation operator, meaning it joins strings together 
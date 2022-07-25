// the basics of JS and how to use operators in the easiest way possible as a beginner

// logical && operator
var score = 8;
console.log ("Mid-level skills:", score > 0 && score < 10) //Mid-level skills: true

// logical || operator
var timeRemaining = 0; // change the variable to anything above 0 and see how the output will differ
var energy = 10;
console.log ("Game over:", timeRemaining == 0 || energy == 0); // Game over: true

// modulus operator % - check if a number is even
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log ("Is", num1, "an even number?", result1); // Is 2 an even number? true
console.log ("Is", num2, "an even number?", result2); // Is 5 an even number? false

// add numbers with + operator in one line
console.log (5 + 10); // 15

// concatenate numbers and strings with + operator
var now = "Now in ";
var three = 3;
var d = "D!"
console.log (now + three + d); // "Now in 3D!"

// accumulate values in a variable with += operator
var counter = 0;
counter += 5;
counter += 3;
console.log (counter); // 8
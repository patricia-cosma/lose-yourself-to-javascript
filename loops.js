// for loop

// increase value
for (var i=1; i<=3; i++) { // set value; specify condition; increment counter;
    console.log (i);
}
console.log ('Go!');

// decrease value
for (var i=10; i>0; i--) {
    console.log (i);
}
console.log ('Happy New Year!');

// While loop = code that repeats as long as a specified condition is true
var counter = 3; // value is specified outside of the loop
while (counter > 0) { // checks if the value is greater than 0;
    console.log (counter); // outputs the value of counter
    counter = counter - 1; // decreases the value of counter by 1, then checks the loop again until counter is 0;
}
console.log ('Run!') // when counter is 0, this will be the output


//nested loop
for (var i = 100; i > 10; i = i - 10) {  // the outer loop will act as the first number to be divided
    for (j = 10; j > 4; j = j - 5) {  // the inner loop will act as the second number to be divided
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

// for ... of loops
// arrays are iterable, therefore we can use the for...of right away
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color); // it will output each color on a different row
}
// we can use the fact that a for...of loop can be run on arrays to loop over objects using built-in methods (as objects are not iterable, therefore this cannot be done directly)
// Object.keys() - returns the properties of the object, without the values
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

// Object.values () - returns only the values
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

// Object.entries() - returns both the keys and the values
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));
// [ ['speed', 400], ['color', 'magenta'] ] - an array of arrays / 2-member arrays nested in a bigger one
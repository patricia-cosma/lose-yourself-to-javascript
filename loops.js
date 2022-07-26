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
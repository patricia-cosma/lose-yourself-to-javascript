/* The most common errors in JavaScript
1. SyntaxError
    - any kind of invalid JavaScript code
    - it cannot be caught with try-catch block
    var a "there's no assignment operator here";
    Uncaught SyntaxError: Unexpected string;

2. ReferenceError:
    - it gets thrown when, for example, one tries to use variables that haven't been declared anywhere
    console.log(username);
    Uncaught ReferenceError: username is not defined; (because username was not declared)

3. TypeError
    - it is thrown when, for example, trying to run a method on a non-supported data type
    "hello".pop() // Uncaught TypeError: "hello".pop is not a function

4. RangeError
    - it gets thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value
*/

console.log (a + b);
console.log ('This piece of code will not run');
// because a and b were not declared

// try catch blocks - ensures that JS doesn't stop program execution even if there is an error
try {
    console.log (a + b); // adding the code we think doesn't work
} catch { // this will catch the error that the try block produces
    console.log (err);
    console.log ('There was an error');
    console.log ('The error was saved in the error log');
}
console.log ('This line will run')

// manually throwing an error
try {
    throw new ReferenceError; 
} catch { 
    console.log (err); // this ouputs the error object
    console.log ('That was a ReferenceError'); // this outputs the string
}
console.log ('This line will run')

// error prevention
function addTwoNums (a,b) {
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError ('the first argument is not a number');
        } else if (typeof(b) != 'number') {
            throw new ReferenceError ('the second argument is not a number');
        } else {
            console.log (a + b);
        }
    } catch (err) {
     console.log ('Error!', err);
    }
}
addTwoNums (5,'5');
console.log ('it still works')

// undefined, null & empty variables
// null = intentional absence of object value
var letters = 'abc';
letters.match (/d/); // null - it knows it should be there

// undefined
console.log ('Jane'); // Jane undefined - because it is a function and you are not returning a value
// variable is declared without an assignment like a new born is undefined until they have a name :)
var noise; // undefined is automatically assigned to the variable; that's why is better to assign it when we declare it
console.log (noise);

//empty string
var name1 = ' ';
var name2 = " ";
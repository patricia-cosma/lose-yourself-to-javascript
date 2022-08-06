// function calling and recursion
function example () {
    console.log ('line one');
    console.log ('line two');
    console.log ('line three');
    // example (); - adding the function calling here would run the function endlessly
}
example ();

// to avoid the function repeting in an infinite loop, we can create the following:
let counter = 3;
function example () {
    console.log (counter);
    counter = counter - 1;
    if (counter === 0) return;
    example ();
}
example (); // 3, 2, 1 (and then it will stop)
// in this case, the function calls itself - this is known as recursion
// recursion = alternative way to run repetitive code without the use of loops

// scope = it determines which parts of the code are accessible or not
var num1 = 10; // global scope
function score () {
    var num2 = 20; // local scope - this variable is scoped to the function in which it was created
    console.log (num2); // 20
} // the local ("child") scope is linked to the global ("parent") scope - this link is called the chain

// functions are first-class citizens in FP, meaning they are treated like any other value
// function that returned another function = higher-order function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var getOdds3 = arr => arr.filter(num => num % 2 !== 0);
console.log(getOdds3(arr));

// building a functional program
// build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message, style);
}

// build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(reason, fontStyle);
    }
}

// run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

// call styleAndCelebrate
styleAndCelebrate('#ef7c8e', '#fae8e0', '30px', 'You made it!', 'champions');
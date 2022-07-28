// functions help you write more reusable code; therefore they are highly important for day2day development

function addTwoNums () { // function without parameters
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log (c);
}
// a function declaration on its own doesn't execute the code. It's just specifying what operations should be performed
addTwoNums (); // so you need to call the function in order to be executed

function addTwoNum (c,d) { // function with parameters
    var e = c + d;
    console.log (e);
}
addTwoNum (2,3); // var c and d can be changed directly here
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

// take a word and locate the position of a chosen letter in that specific word
function letterFinder (word, match) {
    for (i=0; i < word.length; i++) {
        if (word[i] == match) { // access each letter inside the paramater word using the counter variable word[i] and check if its value is equal to the value of match
            console.log ('Found the ', match, 'at ', i);
        } else {
            console.log ('--- No match found at ', i);
        }
    }
}
letterFinder ('test', 't');
// Found the t at 0
// --- No match found at 1
// --- No match found at 2
// Found the t at 3
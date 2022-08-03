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

// extra example
function tulips (color, match) {
    for (i=0; i < color.length; i++) {
        if (color[i] == match) {
            console.log ('Found the ', match, 'one at ', i);
        } else {
            console.log ('---- ', i, ' is another color');
        }
    }
}
tulips (['pink', 'green', 'yellow', 'orange', 'brown', 'orange'], 'orange')
/*----  0  is another color
----  1  is another color
----  2  is another color
Found the orange one at 3
----  4  is another color 
Found the orange one at 5 */


// function with defensive programming
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >=2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 == true && condition2 == true) {
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log ('Please pass correct arguments to the function');
    }
}
// letterFinder (2,2); // run this for a failed test
// letterFinder ('cat', 'c'); // tun this for a passed test
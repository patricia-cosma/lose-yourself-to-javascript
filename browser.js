// DOM manipulation

// // update the document object 
const h2 = document.createElement('h2'); // passing the tag names as a JS string & assign the statement to a const variable
// it is still undefined as it needs to also be attached to the DOM structure
// in order to see it after it is attached to the DOM, we also need some text, otherwise it will be blank & no visible change will be spotted
h2.innerText = "This is a h2 heading";
// we want our h2 to have an ID and a class attribute
h2.setAttribute ('id', 'sub-heading'); // 2 parameters = attribute's name + value of the attribute
h2.setAttribute ('class', 'secondary');
// typing h2 to test the code - this way you will notice the HTML structure's output
// then, append the h2 to the DOM
document.body.appendChild(h2);

// JavaScript selectors
document.querySelector('p') // selects the 1st paragraph in the web page
document.querySelectorAll('p') // selects all paragraph within the page
document.getElementById('heading') // element with that ID - if there is nothing with that ID, null will be returned
document.getElementsByClassName('center') // elements with that class name - if there is no such class, empty collection with [] will be returned

// event handling
const target = document.querySelector('body') // the event will happen in the body
function handleClick() {
    console.log('clicked the body');
}
target.addEventListener('click', handleClick) // 2 paramters: event type as a string value and secondly, the function
// when clicking anywhere in the body, the text from the function will be output in the console

// alternative methods to listen to events is by using HTML event attributes
function handleClick2() {
    console.log ('Clicked the heading')
}
// we then go the HTML file and add onclick="handleClick2()" in the heading we aim for (<h1 onclick="handleClick2()">)
// now when we click on the heading, both functions will run (triggering so 2 event listeners); for the rest of the body, only the first one remains

// web page content update
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = ''; // de ce asta?
    document.body.appendChild(h1);
}
// DOM manipulation

// // update the document object 
const h2 = document.createElement('h2'); // passing the tag names as a JS spring & assign the statement to a const variable
// it is still undefined as it needs to also be attached to the DOM structure
// in order to see it after it is attached to the DOM, we also need some text, otherwise it will be blank & no visible change will be spotted
h2.innerText = "This is a h2 heading";
// we want our h2 to have an ID and a class attribute
h2.setAttribute ('id', 'sub-heading'); // 2 parameters = attribute's name + value of the attribute
h2.setAttribute ('class', 'secondary');
// typing h2 to test the code - this way you will notice the HTML structure's output
// then, append the h2 to the DOM
document.body.appendChild(h2);


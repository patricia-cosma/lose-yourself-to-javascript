// if statement
var age = 10;

if (age >= 65) {
    console.log ('You get your income from your pension')
} else if (age < 65 && age >=18) {
    console.log ('Each month you get a salary')
} else if (age < 18) {
    console.log ('You get an allowance')
} else {
    console.log ('The value of the age variable is not numerical')
}

// switch statement
var day = 'Sunday';

switch (day) {
    case 'Monday':
        console.log ('Groceries for the week');
        break;
    case 'Tuesday':
        console.log ('Therapy');
        break;
    case 'Wednesday':
        console.log ('Gym');
        break;
    case 'Thursday':
        console.log ('Movie night');
        break;
    case 'Friday':
        console.log ('Game night');
        break;
    case 'Saturday':
        console.log ('Clean the house');
        break;
    case 'Sunday':
        console.log ('Hiking');
        break;
    default:
        console.log ('There is no such day');
}
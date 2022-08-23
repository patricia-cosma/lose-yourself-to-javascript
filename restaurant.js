// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (key of Object.keys(dishData)) {
        var finalPrice;
        if (taxBoolean == true) {
            finalPrice = dishData[key].price * tax;
        } else if (taxBoolean == false) {
            finalPrice = dishData[key].price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!")
            return 0;
        }
        console.log("Dish: ", dishData[key].price, "Price: $", finalPrice);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    
}

// Call getDiscount()

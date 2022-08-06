//difference between FP and OOP for the same task
// functional
var shoes = 100;
var stateTax = 1.2;
function totalPrice (shoes, tax) {
    return shoes * tax;
}
var toPay = totalPrice (shoes, stateTax);
console.log (toPay);

// object-oriented
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function () {
        var price = this.shoes * this.stateTax; // 'this' approach allows for the reuse of existing code
        //'this' keyword essentially means this object
        console.log('Total price is ', price);
    }
}
purchase1.totalPrice ();
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

// polymorphism
class Plant { // this is a super-class
    needWater () {
        console.log('Flowers need water');
    }
}
class Orchid extends Plant { // this sub-class inherits needWater() method from the super-class
    needWater () {
        super.needWater ();
        console.log ('I need water regularly'); // and extends with an additional console log
    }
}
class Cactus extends Plant {
    needWater () { // this doesn't inherit the needWater() class; it has its own implementation, although the class itself extends the super-class
        console.log ('Little water');
    }
}
var pinkOrchid = new Orchid ();
var smallCactus = new Cactus ();
pinkOrchid.needWater (); // I need water regularly
smallCactus.needWater (); // Little water

// creating classes - example
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

// more features example
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
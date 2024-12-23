// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); // Call the Car constructor for inheritance
  this.topSpeed = topSpeed;
}

// Inherit the prototype of Car
SportsCar.prototype = Object.create(Car.prototype);

// Reset the constructor to SportsCar
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function () {
  return `${this.make} ${this.model} has a top speed of ${this.topSpeed} mph.`;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

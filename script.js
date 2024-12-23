// Complete the js code
function Car(make, model) {
	this._make = make;
	this._model = model;
}

getMakeModel(){
	return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	super();
	this._topSpeed = topSpeed;
}

getTopSpeed(){
	return `${this.make} ${this.model} ${this.topSpeed}`;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

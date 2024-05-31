import Car from './10-car';

// Define and export EVCar class
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call parent constructor
    this._range = range; // Initialize _range property
  }

  static get [Symbol.species]() {
    return Car; // Return Car for species
  }
}

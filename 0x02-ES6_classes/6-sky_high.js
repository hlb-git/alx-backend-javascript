import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call parent constructor
    this._floors = floors; // Initialize floors
  }

  get floors() {
    return this._floors; // Getter for floors
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number'); // Validate floors
    }
    this._floors = floors; // Setter for floors
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // Return evacuation message
  }
}


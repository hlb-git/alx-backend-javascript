export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      const props = Object.getOwnPropertyNames(this.constructor.prototype);
      if (!props.find((e) => e === 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft; // Initialize sqft
  }

  get sqft() {
    return this._sqft; // Getter for sqft
  }

  set sqft(sqft) {
    if ((typeof sqft !== 'number') && (sqft instanceof Number)) {
      throw new TypeError('Sqft must be a number'); // Validate sqft
    }
    this._sqft = sqft; // Setter for sqft
  }
}


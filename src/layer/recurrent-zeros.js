const zeros2D = require('../utilities/zeros-2d');
const { Internal } = require('./types');

class RecurrentZeros extends Internal {
  setDimensions(width, height) {
    this.praxis = null;
    this.width = width;
    this.height = height;
    this.weights = zeros2D(width, height);
    this.deltas = zeros2D(width, height);
  }

  setupKernels() {
    // throw new Error(
    //   `${this.constructor.name}-setupKernels is not yet implemented`
    // )
  }

  reuseKernels() {
    // throw new Error(
    //   `${this.constructor.name}-reuseKernels is not yet implemented`
    // )
  }

  predict() {
    // throw new Error(`${this.constructor.name}-predict is not yet implemented`)
  }

  compare() {
    // throw new Error(`${this.constructor.name}-compare is not yet implemented`)
  }

  learn(previousLayer, nextLayer, learningRate) {
    this.weights = this.praxis.run(this, previousLayer, nextLayer, learningRate);
    this.deltas = zeros2D(this.width, this.height);
  }

  validate() {
    throw new Error(`${this.constructor.name}-validate is not yet implemented`);
  }

  reset() {
    throw new Error(`${this.constructor.name}-reset is not yet implemented`);
  }
}

module.exports = {
  RecurrentZeros
};
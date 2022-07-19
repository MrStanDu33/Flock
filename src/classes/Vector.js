/**
 * @file Vector class file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

class Vector {
  #innerVectors = [];

  #limit = Infinity;

  #magnitude = null;

  add(position) {
    this.#innerVectors.push({
      x: position.x,
      y: position.y,
    });
  }

  sub(position) {
    this.#innerVectors.push({
      x: -position.x,
      y: -position.y,
    });
  }

  mult(multiplier) {
    this.#innerVectors = this.#innerVectors.map((vector) => ({
      x: vector.x * multiplier,
      y: vector.y * multiplier,
    }));
  }

  div(divider) {
    this.#innerVectors = this.#innerVectors.map((vector) => ({
      x: vector.x / divider,
      y: vector.y / divider,
    }));
  }

  limit(limit) {
    this.#limit = limit;
  }

  magnitude(magnitude) {
    this.#magnitude = magnitude;
  }

  getComponents() {
    const baseVector = this.#computeAvgPositionVectors();

    const vectorWithMagnitude = this.#computeVectorWithMagnitude(baseVector);
    const vectorWithLimit = this.#computeVectorWithLimit(vectorWithMagnitude);

    const mag = Vector.#computeMagnitude(vectorWithLimit);
    const angle = Vector.#computeAngle(vectorWithLimit);

    const x = mag * Math.cos((angle * Math.PI) / 180);
    const y = mag * Math.sin((angle * Math.PI) / 180);

    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
    };
  }

  #computeAvgPositionVectors() {
    return {
      x: this.#innerVectors.reduce((sum, vector) => sum + vector.x, 0),
      y: this.#innerVectors.reduce((sum, vector) => sum + vector.y, 0),
    };
  }

  static #computeAngle(vector) {
    if (vector.x === 0 && vector.y === 0) return 0;
    if (vector.x === 0 && vector.y > 0) return 90;
    if (vector.x === 0 && vector.y < 0) return -90;

    const ratio = vector.y / vector.x;

    let angleCorrector = 0;
    if (vector.x < 0 && vector.y < 0) angleCorrector = -180;
    if (vector.x < 0 && vector.y > 0) angleCorrector = 180;

    const angle = (Math.atan(ratio) * 180) / Math.PI;

    return angle + angleCorrector;
  }

  static #computeMagnitude(vector) {
    const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);

    return magnitude;
  }

  #computeVectorWithMagnitude(vector) {
    const magnitude = this.#magnitude ?? Vector.#computeMagnitude(vector);
    const angle = Vector.#computeAngle(vector);

    return {
      x: magnitude * Math.cos((angle * Math.PI) / 180),
      y: magnitude * Math.sin((angle * Math.PI) / 180),
    };
  }

  #computeVectorWithLimit(vector) {
    const magnitude = Vector.#computeMagnitude(vector) > this.#limit ? this.#limit : Vector.#computeMagnitude(vector);
    const angle = Vector.#computeAngle(vector);

    return {
      x: magnitude * Math.cos((angle * Math.PI) / 180),
      y: magnitude * Math.sin((angle * Math.PI) / 180),
    };
  }
}

window.Vector = Vector;

export default Vector;

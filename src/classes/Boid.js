/**
 * @file Boid class file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

class Boid {
  position;

  vectors;

  acceleration;

  maxForce;

  perceptionRadius;

  constructor({ position, vectors, maxForce, perceptionRadius, maxSpeed }) {
    this.position = position;
    this.vectors = vectors;
    this.acceleration = {
      x: 0,
      y: 0,
    };
    this.maxForce = maxForce;
    this.maxSpeed = maxSpeed;
    this.perceptionRadius = perceptionRadius;
  }

  update(boids) {
    const vector = this.computeVector(boids);

    this.acceleration.x += vector.x;
    this.acceleration.y += vector.y;

    this.position.x += this.vectors.x;
    this.position.y += this.vectors.y;

    if (Number.isNaN(this.position.x) || Number.isNaN(this.position.y)) debugger;

    this.vectors.x += this.acceleration.x;
    this.vectors.y += this.acceleration.y;

    if (this.vectors.x > this.maxSpeed) this.vectors.x = this.maxSpeed;
    if (this.vectors.y > this.maxSpeed) this.vectors.y = this.maxSpeed;
    if (this.vectors.x < -this.maxSpeed) this.vectors.x = -this.maxSpeed;
    if (this.vectors.y < -this.maxSpeed) this.vectors.y = -this.maxSpeed;

    this.acceleration.x = 0;
    this.acceleration.y = 0;
  }

  computeVector(boids) {
    const vectors = [];

    vectors.push(...this.computeSeparationVector(boids));
    vectors.push(...this.computeAlignmentVector(boids));
    vectors.push(...this.computeCohesionVector(boids));

    if (!vectors.length) return this.vectors;

    const avgVector = {
      x: vectors.reduce((a, b) => a + b.x, 0) / vectors.length,
      y: vectors.reduce((a, b) => a + b.y, 0) / vectors.length,
    };

    if (Number.isNaN(avgVector.x) || Number.isNaN(avgVector.y)) debugger;

    return avgVector;
  }

  computeSeparationVector(boids) {
    const neighboursPositions = [];
    boids.forEach((boid) => {
      if (this === boid) return;
      const distance = Math.abs(boid.position.x - this.position.x) + Math.abs(boid.position.y - this.position.y);
      if (distance < this.perceptionRadius - 1) {
        const vector = {
          x: this.position.x - boid.position.x,
          y: this.position.y - boid.position.y,
        };

        vector.x /= distance * distance;
        vector.y /= distance * distance;

        neighboursPositions.push(vector);
      }
    });

    if (!neighboursPositions.length) return [];

    const avgNeighboursPositions = {
      x: neighboursPositions.reduce((a, b) => a + b.x, 0) / neighboursPositions.length,
      y: neighboursPositions.reduce((a, b) => a + b.y, 0) / neighboursPositions.length,
    };

    const avgNeighboursPositionsMagnitude = Math.sqrt(
      avgNeighboursPositions.x * avgNeighboursPositions.x + avgNeighboursPositions.y * avgNeighboursPositions.y,
    );

    avgNeighboursPositions.x = (avgNeighboursPositions.x / avgNeighboursPositionsMagnitude) * this.maxSpeed;
    avgNeighboursPositions.y = (avgNeighboursPositions.y / avgNeighboursPositionsMagnitude) * this.maxSpeed;

    avgNeighboursPositions.x -= this.vectors.x;
    avgNeighboursPositions.y -= this.vectors.y;

    if (avgNeighboursPositions.x > this.maxForce) avgNeighboursPositions.x = this.maxForce;
    if (avgNeighboursPositions.y > this.maxForce) avgNeighboursPositions.y = this.maxForce;
    if (avgNeighboursPositions.x < -this.maxForce) avgNeighboursPositions.x = -this.maxForce;
    if (avgNeighboursPositions.y < -this.maxForce) avgNeighboursPositions.y = -this.maxForce;

    return [
      {
        x: avgNeighboursPositions.x * Number(document.querySelector('[name="separation"]').value),
        y: avgNeighboursPositions.y * Number(document.querySelector('[name="separation"]').value),
      },
    ];
  }

  computeAlignmentVector(boids) {
    const vectors = [];
    boids.forEach((boid) => {
      if (this === boid) return;
      if (
        Math.abs(boid.position.x - this.position.x) < this.perceptionRadius / 2 &&
        Math.abs(boid.position.y - this.position.y) < this.perceptionRadius / 2
      ) {
        vectors.push(boid.vectors);
      }
    });

    if (!vectors.length) return [];

    const avgAlignmentVectors = {
      x: vectors.reduce((a, b) => a + b.x, 0) / vectors.length,
      y: vectors.reduce((a, b) => a + b.y, 0) / vectors.length,
    };

    const avgAlignmentVectorsMagnitude = Math.sqrt(
      avgAlignmentVectors.x * avgAlignmentVectors.x + avgAlignmentVectors.y * avgAlignmentVectors.y,
    );

    avgAlignmentVectors.x = (avgAlignmentVectors.x / avgAlignmentVectorsMagnitude) * this.maxSpeed;
    avgAlignmentVectors.y = (avgAlignmentVectors.y / avgAlignmentVectorsMagnitude) * this.maxSpeed;

    avgAlignmentVectors.x -= this.vectors.x;
    avgAlignmentVectors.y -= this.vectors.y;

    if (avgAlignmentVectors.x > 1) avgAlignmentVectors.x = this.maxForce;
    if (avgAlignmentVectors.y > 1) avgAlignmentVectors.y = this.maxForce;
    if (avgAlignmentVectors.x < -1) avgAlignmentVectors.x = -this.maxForce;
    if (avgAlignmentVectors.y < -1) avgAlignmentVectors.y = -this.maxForce;

    return [
      {
        x: avgAlignmentVectors.x * Number(document.querySelector('[name="alignment"]').value),
        y: avgAlignmentVectors.y * Number(document.querySelector('[name="alignment"]').value),
      },
    ];
  }

  computeCohesionVector(boids) {
    const neighboursPositions = [];
    boids.forEach((boid) => {
      if (this === boid) return;
      if (
        Math.abs(boid.position.x - this.position.x) < this.perceptionRadius &&
        Math.abs(boid.position.y - this.position.y) < this.perceptionRadius
      ) {
        neighboursPositions.push(boid.position);
      }
    });

    if (!neighboursPositions.length) return [];

    const avgNeighboursPositions = {
      x: neighboursPositions.reduce((a, b) => a + b.x, 0) / neighboursPositions.length,
      y: neighboursPositions.reduce((a, b) => a + b.y, 0) / neighboursPositions.length,
    };

    avgNeighboursPositions.x -= this.position.x;
    avgNeighboursPositions.y -= this.position.y;

    const avgNeighboursPositionsMagnitude = Math.sqrt(
      avgNeighboursPositions.x * avgNeighboursPositions.x + avgNeighboursPositions.y * avgNeighboursPositions.y,
    );

    avgNeighboursPositions.x = (avgNeighboursPositions.x / avgNeighboursPositionsMagnitude) * this.maxSpeed;
    avgNeighboursPositions.y = (avgNeighboursPositions.y / avgNeighboursPositionsMagnitude) * this.maxSpeed;

    avgNeighboursPositions.x -= this.vectors.x;
    avgNeighboursPositions.y -= this.vectors.y;

    if (avgNeighboursPositions.x > this.maxForce) avgNeighboursPositions.x = this.maxForce;
    if (avgNeighboursPositions.y > this.maxForce) avgNeighboursPositions.y = this.maxForce;
    if (avgNeighboursPositions.x < -this.maxForce) avgNeighboursPositions.x = -this.maxForce;
    if (avgNeighboursPositions.y < -this.maxForce) avgNeighboursPositions.y = -this.maxForce;

    return [
      {
        x: avgNeighboursPositions.x * Number(document.querySelector('[name="cohesion"]').value),
        y: avgNeighboursPositions.y * Number(document.querySelector('[name="cohesion"]').value),
      },
    ];
  }
}

export default Boid;

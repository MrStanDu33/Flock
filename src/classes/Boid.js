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
    const neighboursSeparation = [];
    const neighboursAlignment = [];
    const neighboursCohesion = [];

    boids.forEach((boid) => {
      if (this === boid) return;

      const distance = Math.abs(boid.position.x - this.position.x) + Math.abs(boid.position.y - this.position.y);

      if (distance < this.perceptionRadius) {
        neighboursCohesion.push(boid.position);
      }

      if (distance < this.perceptionRadius / 2) {
        neighboursAlignment.push(boid.vectors);
      }

      if (distance < this.perceptionRadius - 1) {
        neighboursSeparation.push({
          x: ((this.position.x - boid.position.x) / distance) * distance,
          y: ((this.position.y - boid.position.y) / distance) * distance,
        });
      }
    });

    vectors.push(...this.computeSeparationVector(neighboursSeparation));
    vectors.push(...this.computeAlignmentVector(neighboursAlignment));
    vectors.push(...this.computeCohesionVector(neighboursCohesion));

    if (!vectors.length) return this.vectors;

    const avgVector = {
      x: vectors.reduce((a, b) => a + b.x, 0) / vectors.length,
      y: vectors.reduce((a, b) => a + b.y, 0) / vectors.length,
    };

    return avgVector;
  }

  computeSeparationVector(neighboursPositions) {
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

  computeAlignmentVector(neighboursAlignment) {
    if (!neighboursAlignment.length) return [];

    const avgAlignmentVectors = {
      x: neighboursAlignment.reduce((a, b) => a + b.x, 0) / neighboursAlignment.length,
      y: neighboursAlignment.reduce((a, b) => a + b.y, 0) / neighboursAlignment.length,
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

  computeCohesionVector(neighboursCohesion) {
    if (!neighboursCohesion.length) return [];

    const avgNeighboursPositions = {
      x: neighboursCohesion.reduce((a, b) => a + b.x, 0) / neighboursCohesion.length,
      y: neighboursCohesion.reduce((a, b) => a + b.y, 0) / neighboursCohesion.length,
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

/**
 * @file Boid class file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

import Vector from '$src/classes/Vector';

class Boid {
  position;

  vectors;

  acceleration;

  maxForce;

  perceptionRadius;

  constructor({ position, vectors, maxForce, perceptionRadius, maxSpeed }) {
    this.position = position;
    this.vectors = new Vector(vectors);
    this.acceleration = new Vector({ x: 0, y: 0 });
    this.maxForce = maxForce;
    this.maxSpeed = maxSpeed;
    this.perceptionRadius = perceptionRadius;
  }

  update(boids) {
    const vector = new Vector(this.computeVector(boids));

    this.acceleration.add(vector.getComponents());

    this.position.x += this.vectors.getComponents().x;
    this.position.y += this.vectors.getComponents().y;

    this.vectors.add(this.acceleration.getComponents());

    this.vectors.limit(this.maxSpeed);

    this.acceleration = new Vector();
    this.vectors = new Vector(this.vectors.getComponents());
  }

  computeVector(boids) {
    const vectors = new Vector();
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
        neighboursAlignment.push(boid.vectors.getComponents());
      }

      if (distance < this.perceptionRadius - 1) {
        neighboursSeparation.push({
          x: ((this.position.x - boid.position.x) / distance) * distance,
          y: ((this.position.y - boid.position.y) / distance) * distance,
        });
      }
    });

    vectors.add(this.computeSeparationVector(neighboursSeparation));

    vectors.add(this.computeAlignmentVector(neighboursAlignment));

    vectors.add(this.computeCohesionVector(neighboursCohesion));

    return vectors.getComponents();
  }

  computeSeparationVector(neighboursPositions) {
    if (!neighboursPositions.length) return { x: 0, y: 0 };

    const avgNeighboursPositions = new Vector({
      x: neighboursPositions.reduce((a, b) => a + b.x, 0) / neighboursPositions.length,
      y: neighboursPositions.reduce((a, b) => a + b.y, 0) / neighboursPositions.length,
    });

    avgNeighboursPositions.magnitude(this.maxSpeed);

    avgNeighboursPositions.sub(this.vectors.getComponents());

    avgNeighboursPositions.limit(this.maxForce);

    avgNeighboursPositions.mult(Number(document.querySelector('[name="separation"]').value));

    return avgNeighboursPositions.getComponents();
  }

  computeAlignmentVector(neighboursAlignment) {
    if (!neighboursAlignment.length) return { x: 0, y: 0 };

    const avgAlignmentVectors = new Vector({
      x: neighboursAlignment.reduce((a, b) => a + b.x, 0) / neighboursAlignment.length,
      y: neighboursAlignment.reduce((a, b) => a + b.y, 0) / neighboursAlignment.length,
    });

    avgAlignmentVectors.magnitude(this.maxSpeed);
    avgAlignmentVectors.sub(this.vectors.getComponents());
    avgAlignmentVectors.limit(this.maxForce);
    avgAlignmentVectors.mult(Number(document.querySelector('[name="alignment"]').value));

    return avgAlignmentVectors.getComponents();
  }

  computeCohesionVector(neighboursCohesion) {
    if (!neighboursCohesion.length) return { x: 0, y: 0 };

    const avgNeighboursPositions = new Vector({
      x: neighboursCohesion.reduce((a, b) => a + b.x, 0) / neighboursCohesion.length,
      y: neighboursCohesion.reduce((a, b) => a + b.y, 0) / neighboursCohesion.length,
    });

    avgNeighboursPositions.sub(this.position);
    avgNeighboursPositions.magnitude(this.maxSpeed);
    avgNeighboursPositions.sub(this.vectors.getComponents());
    avgNeighboursPositions.limit(this.maxForce);
    avgNeighboursPositions.mult(Number(document.querySelector('[name="cohesion"]').value));

    return avgNeighboursPositions.getComponents();
  }
}

export default Boid;

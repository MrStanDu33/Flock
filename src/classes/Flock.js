/**
 * @file Flock class file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

class Flock {
  cohesionForce;

  separationForce;

  alignmentForce;

  maxGridSize;

  boid;

  constructor({ cohesionForce, separationForce, alignmentForce, maxGridSize }) {
    this.cohesionForce = cohesionForce;
    this.separationForce = separationForce;
    this.alignmentForce = alignmentForce;
    this.maxGridSize = maxGridSize;
    this.boids = [];
  }

  insertBoid(boid) {
    this.boids.push(boid);
  }
}

export default Flock;

/**
 * @file Entry point file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

import Flock from '$src/classes/Flock';
import Boid from '$src/classes/Boid';

import '$src/style.css';

const flock = new Flock({
  maxGridSize: 1000,
});

for (let number = 0; number < 100; number += 1) {
  const boid = new Boid({
    position: {
      x: Math.random() * flock.maxGridSize,
      y: Math.random() * flock.maxGridSize,
    },
    vectors: {
      x: Math.random() * (1 - -1) + -1,
      y: Math.random() * (1 - -1) + -1,
    },
    maxForce: 0.4,
    maxSpeed: 4,
    perceptionRadius: 150,
  });
  flock.insertBoid(boid);
}

window.loop = function () {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  context.clearRect(0, 0, canvas.width, canvas.height);

  /* eslint-disable */
  for (const boid of flock.boids) {
    boid.update(flock.boids);
    if (boid.position.x > flock.maxGridSize) boid.position.x = 0;
    if (boid.position.x < 0) boid.position.x = flock.maxGridSize;
    if (boid.position.y > flock.maxGridSize) boid.position.y = 0;
    if (boid.position.y < 0) boid.position.y = flock.maxGridSize;

    context.beginPath();
    context.moveTo(boid.position.x, boid.position.y);
    context.arc(boid.position.x, boid.position.y, 3, 0, 2 * Math.PI);
    context.fill();
  }

  requestAnimationFrame(loop);
};

loop();

window.flock = flock;

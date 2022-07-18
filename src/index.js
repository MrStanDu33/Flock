/**
 * @file Entry point file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

import Flock from '$src/classes/Flock';
import Boid from '$src/classes/Boid';

import '$src/style.css';

let flock = null;

function loop() {
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

  return requestAnimationFrame(loop);
}

function initializeFlock() {
  flock = new Flock({
    maxGridSize: 1000,
  });
  const quantity = Number(document.querySelector('[name="count"]').value);

  for (let number = 0; number < quantity; number += 1) {
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

  if (window.loop) window.clearAnimationFrame(window.loop);
  window.loop = loop();
}

initializeFlock();
document.querySelector('[name="count"]').addEventListener('change', initializeFlock);

window.flock = flock;

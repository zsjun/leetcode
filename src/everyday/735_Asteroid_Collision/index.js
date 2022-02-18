/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  for (let i = 0; i < asteroids.length - 1; i++) {
    if (asteroids[i] > 0 && asteroids[i + 1] < 0) {
      if (Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {
        asteroids[i] = asteroids[i + 1];
        asteroids.splice(i + 1, 1);
        return asteroidCollision(asteroids);
      } else if (Math.abs(asteroids[i]) === Math.abs(asteroids[i + 1])) {
        asteroids.splice(i, 2);
        return asteroidCollision(asteroids);
      } else {
        asteroids.splice(i + 1, 1);
        return asteroidCollision(asteroids);
      }
    }
  }
  return asteroids;
};

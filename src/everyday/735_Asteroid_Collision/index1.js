/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let res = [];
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
      const nowVal = asteroids[i];
      let flag = true;
      if (stack.length === 0) {
        res.push(nowVal);
      } else {
        while (stack.length > 0) {
          if (-nowVal > stack[stack.length - 1]) {
            stack.pop();
          } else if (-nowVal === stack[stack.length - 1]) {
            stack.pop();
            flag = false;
            break;
          } else {
            break;
          }
        }
        if (stack.length === 0 && flag) {
          res.push(nowVal);
        }
      }
    }
  }
  res = res.concat(stack);
  return res;
};

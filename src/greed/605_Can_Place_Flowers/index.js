/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// [1, 0, 0, 0, 1]
// [1,0,0,0,1,0,0]
export default (flowerbed, n) => {
  for (let i = 0; i < flowerbed.length; ) {
    if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] !== 1) {
      flowerbed[i] === 1;
      n--;
      i += 2;
    } else if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] !== 1) {
      n--;
      i++;
    } else if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      flowerbed[i] = 1;
      n--;
      i += 2;
    } else {
      i++;
    }
  }
  return n <= 0;
};

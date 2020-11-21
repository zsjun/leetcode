/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export default (numbers, target) => {
  let minPoints = 0;
  const len = numbers.length;
  let maxPoints = len - 1;
  const res = [];
  while (minPoints < maxPoints) {
    if (numbers[minPoints] + numbers[maxPoints] === target) {
      res.push(++minPoints);
      res.push(++maxPoints);
    } else if (numbers[minPoints] + numbers[maxPoints] > target) {
      maxPoints--;
    } else {
      minPoints++;
    }
  }
  return res;
};

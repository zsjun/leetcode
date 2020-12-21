/**
 * @param {number} N
 * @return {number[]}
 */
// Runtime: 84 ms, faster than 81.25% of JavaScript online submissions for Beautiful Array.
// Memory Usage: 40.6 MB, less than 43.75% of JavaScript online submissions for Beautiful Array.
const getBeautifulArray = (N, map) => {
  if (N === 1) {
    map.set(1, [1]);
    return [1];
  }
  if (N === 2) {
    map.set(2, [1, 2]);
    return [1, 2];
  }
  const left = Math.floor(N / 2);
  let leftArr = [];
  if (map.has(left)) {
    leftArr = map.get(left);
  } else {
    leftArr = getBeautifulArray(left, map);
    map.set(left, leftArr);
  }
  let rightArr = [];
  const right = N - left;
  if (map.has(right)) {
    rightArr = map.get(right);
  } else {
    rightArr = getBeautifulArray(right, map);
    map.set(right, rightArr);
  }
  leftArr = leftArr.map((x) => x * 2);
  rightArr = rightArr.map((x) => x * 2 - 1);
  const temp = [...leftArr, ...rightArr];
  map.set(N, temp);
  return temp;
};

export default (N) => {
  if (N === 1) return [1];
  const map = new Map();
  return getBeautifulArray(N, map);
};

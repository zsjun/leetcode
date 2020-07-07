/**
 * @param {number[]} height
 * @return {number}
 */
// [1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0];
const getFloorTrap = (arr) => {
  let allTrap = 0;
  let i = 0;
  let k = 0;
  while (i < arr.length) {
    if (arr[i] > 0) {
      k = i + 1;
      while (k < arr.length) {
        if (arr[k] > 0 && k - i >= 2) {
          allTrap += k - i - 1;
          i = k;
          break;
        } else if (arr[k] > 0 && k - i === 1) {
          i = k;
          break;
        } else {
          k++;
        }
      }
      if (k >= arr.length) i++;
    } else {
      i++;
    }
  }
  return allTrap;
};
const delFirtZeroArr = (arr) => {
  while (arr[0] === 0) {
    arr.shift();
  }
  while (arr[arr.length - 1] === 0) {
    arr.splice(-1, 1);
  }
  return arr;
};
const getFloor = (height) => {
  height = delFirtZeroArr(height);
  const _arr = [];
  for (let i = 0; i < height.length; i++) {
    if (height[i] >= 1) {
      height[i] = height[i] - 1;
      _arr.push(1);
    } else if (height[i] === 0) {
      _arr.push(0);
    }
  }

  return _arr;
};
export default (height) => {
  let allTrap = 0;

  while (height.length > 2) {
    const floor = getFloor(height);
    allTrap += getFloorTrap(floor);
  }
  return allTrap;
};

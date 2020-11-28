/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default (nums, target) => {
  if (nums.length === 0 || (nums.length === 1 && nums[0] !== target)) {
    return [-1, -1];
  }
  if (nums.length === 1 && nums[0] === target) {
    return [0, 0];
  }

  const len = nums.length;
  let low = 0;
  let high = len - 1;

  const res = [];
  while (low <= high) {
    // 为了防止数据溢出
    let mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] === target) {
      let minFlag = false;
      let maxTemp = mid;
      let minTemp = mid;
      while (minTemp >= 0 && nums[minTemp] === target) {
        minTemp--;
      }

      if (minTemp + 1 !== mid) {
        res.push(minTemp + 1);
      } else {
        res.push(mid);
      }
      while (maxTemp < len && nums[maxTemp] === target) {
        maxTemp++;
      }

      if (maxTemp === mid + 1) {
        res.push(mid);
      } else {
        res.push(maxTemp - 1);
      }
      return res;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    }
    if (nums[mid] > target) {
      high = mid - 1;
    }
  }
  if (res.length === 2) {
    return res.sort((a, b) => a - b);
  } else {
    return [-1, -1];
  }
};

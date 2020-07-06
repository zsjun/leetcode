export default (nums, target) => {
  let end = nums.length - 1;
  let begin = 0;

  if (!nums) return [-1, -1];
  if (nums.length === 1) {
    if (nums[0] === target) {
      return [0, 0];
    } else {
      return [-1, -1];
    }
  }
  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    if (nums[mid] < target) {
      begin = mid + 1;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    }

    if (nums[mid] === target) {
      let min = mid;
      for (let k = 0; k < mid; k++) {
        if (nums[k] === target) {
          min = k;
          break;
        }
      }
      let max = mid;
      for (let j = end; j > mid; j--) {
        console.log("11", nums[j]);
        if (nums[j] === target) {
          max = j;
          break;
        }
      }
      return [min, max];
    }
  }
  return [-1, -1];
};

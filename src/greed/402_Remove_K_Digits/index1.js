const removeCharAt = function (nums, i) {
  let tmp = nums.split(""); // convert to an array
  tmp.splice(i, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
  return tmp.join(""); // reconstruct the string
};
const delZero = function (nums) {
  let tmp = nums.split("");
  let i = 0;

  while (i < nums.length) {
    if (tmp[i] === "0") {
      i++;
    } else {
      break;
    }
  }
  return tmp.slice(i).join("") || "0";
};
export default (nums, k) => {
  if (nums.length === k) return "0";
  let i = 0;
  let count = 0;
  while (i < nums.length - 1 && count < k) {
    while (nums[i + 1] >= nums[i]) {
      i++;
    }
    count++;
    nums = removeCharAt(nums, i);
    nums = delZero(nums);
    i = 0;
  }
  return nums;
};

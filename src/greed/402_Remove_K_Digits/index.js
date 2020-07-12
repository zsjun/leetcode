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

  let count = 0;
  let i = 0;
  const len = nums.length;
  let firstSameIndex = 0;
  let lastSameIndex = 0;
  while (count < k) {
    if (+nums.charAt(lastSameIndex + 1) > +nums.charAt(lastSameIndex)) {
      while (+nums.charAt(lastSameIndex + 1) > +nums.charAt(lastSameIndex)) {
        nums = removeCharAt(nums, lastSameIndex + 1);
        count = count + 1;
        if (lastSameIndex > firstSameIndex) {
          lastSameIndex--;
        }
        if (count === k) {
          return delZero(nums);
        }
      }
    } else if (+nums.charAt(lastSameIndex + 1) < +nums.charAt(lastSameIndex)) {
      while (+nums.charAt(lastSameIndex + 1) < +nums.charAt(lastSameIndex)) {
        nums = removeCharAt(nums, lastSameIndex);
        if (lastSameIndex > firstSameIndex) {
          lastSameIndex--;
        }
        count = count + 1;
        if (count === k) {
          return delZero(nums);
        }
      }
    } else {
      if (i === len - 1 && count !== k) {
        return nums.substr(0, k + 1);
      } else {
        lastSameIndex++;
      }
    }
  }

  return nums;
};

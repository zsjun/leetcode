/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const swap = (a, b) => {
  const tmp = b;
  b = a;
  a = tmp;
};
export default (nums, k) => {
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let _tmp = Math.abs(nums[j] - nums[i]);
      if (results.length === k) {
        results.sort((a, b) => a - b);
        for (let i = 0; i < k; i++) {
          if (_tmp < results[0]) {
            for (let j = k - 1; j >= 1; j--) {
              swap(results[j], results[j - 1]);
            }
            results[0] = _tmp;
          } else if (_tmp >= results[i] && _tmp < results[i + 1]) {
            if (i < k - 2) {
              for (let j = k - 1; j >= i + 1; j--) {
                swap(results[j], results[j - 1]);
              }
            }

            results[i + 1] = _tmp;
          }
          console.log(results);
        }
      } else {
        results.push(_tmp);
      }
    }
  }

  return results[k - 1];
};

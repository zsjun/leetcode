// Input: "owoztneoer"

// Output: "012"
// 'fviefuro';
/**
 * @param {string} s
 * @return {string}
 */
export default (s) => {
  let res = '';
  const counts = new Array(128).fill(0);
  const nums = new Array(10).fill(0);
  for (let c of s) {
    console.log(c.charCodeAt());
    ++counts[c.charCodeAt()];
  }
  // ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  // zero 的个数 z只出现在zero中，所以有多少个z就有多个0
  nums[0] = counts['z'.charCodeAt()];
  // 如果有w只在two中
  nums[2] = counts['w'.charCodeAt()];
  nums[4] = counts['u'.charCodeAt()];
  nums[6] = counts['x'.charCodeAt()];
  nums[8] = counts['g'.charCodeAt()];
  nums[1] = counts['o'.charCodeAt()] - nums[0] - nums[2] - nums[4];
  nums[3] = counts['h'.charCodeAt()] - nums[8];
  nums[5] = counts['f'.charCodeAt()] - nums[4];
  nums[7] = counts['s'.charCodeAt()] - nums[6];
  nums[9] = counts['i'.charCodeAt()] - nums[6] - nums[8] - nums[5];
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums[i]; ++j) {
      res += i;
    }
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const getBitNum = (k) => {
  let bits = 0;
  while (k > 0) {
    k >>= 1;
    bits++;
  }
  return bits;
};
const generate = (nums, k, single) => {
  const m = getBitNum(k);
  const counts = [];
  for (let i = 0; i < m; i++) {
    counts[i] = 0;
  }
  //2, 2, 3, 2
  for (let i = 0; i < nums.length; i++) {
    // let temp = nums[i];
    // counts[0] ^= temp;
    // for (let i = 1; i < m; i++) {
    //   counts[i] ^= counts[i - 1] & temp;
    // }
    // 获取统计
    // xm = xm ^ (xm-1 & ... & x1 & temp)
    for (let j = m - 1; j >= 0; j--) {
      let temp = nums[i];
      for (let m1 = j - 1; m1 >= 0; m1--) {
        temp &= counts[m1];
      }
      counts[j] ^= temp;
    }
    // console.log(counts);
    // 减去k的倍数
    let mask = ~0;
    for (let i = m - 1; i >= 0; i--) {
      if (((k >> i) & 1) == 1) {
        mask &= counts[i];
      } else {
        mask &= ~counts[i];
      }
    }
    mask = ~mask;

    for (let i = m - 1; i >= 0; i--) {
      counts[i] &= mask;
    }
  }
  // 得到p‘, 因为是k的倍数的都被置为0了，如果在x1到xm中出现1，则表示是该元素
  single %= k;
  for (let i = 0; i < m; i++) {
    if ((single & 1) == 1) {
      return counts[i];
    } else {
      single >>= 1;
    }
  }
  return -1;
};
export default (nums) => {
  return generate(nums, 3, 1);
};

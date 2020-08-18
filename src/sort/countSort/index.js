export default (nums) => {
  // 建立一个k数组,k记录nums数组中每个值出现的次数
  let kArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!kArr[nums[i]]) {
      kArr[nums[i]] = 0;
      kArr[nums[i]]++;
    } else {
      kArr[nums[i]]++;
    }
  }
  // 得到k数组中小于该数的数组
  for (let j = 1; j < kArr.length; j++) {
    if (!kArr[j - 1]) {
      kArr[j - 1] = 0;
    }
    if (!kArr[j]) {
      kArr[j] = 0;
    }
    kArr[j] += kArr[j - 1];
  }
  // 返回数组
  let res = [];
  // 取出来，然后放到合适的位置
  for (let k = 0; k < nums.length; k++) {
    res[kArr[nums[k]] - 1] = nums[k];
    if (kArr[nums[k]] > 1) {
      kArr[nums[k]]--;
    }
  }
  // res.shift();
  return res;
};

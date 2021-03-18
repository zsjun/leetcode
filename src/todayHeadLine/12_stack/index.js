// 算法题：算法题一个数组，找出每个数组元素右侧第一个比当前数大的数的下标，时间复杂度O(N)
// 例：输入[1, 3, 2, 5, 4, 6, 7, 10]，输出[1, 3, 3, 5, 5, 6, 7, -1]

export default (arr) => {
  if (arr.length <= 1) return arr;
  const len = arr.length;
  const res = new Array(len).fill(-1);
  const stack = [arr[0]];

  for (let i = 1; i < len; i++) {
    if (arr[i] > stack[stack.length - 1]) {
      stack.push(arr[i]);
    } else {
      stack.push(stack[stack.length - 1]);
    }
  }
  for (let i = 0; i < len - 1; i++) {
    let j = i + 1;
    while (stack[j] <= arr[i]) {
      j++;
    }
    res[i] = j;
  }
  console.log(res);
  return res;
};

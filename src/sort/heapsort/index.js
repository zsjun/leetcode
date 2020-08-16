const swap = (nums, i, j) => {
  const temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
};
const heapfiy = (nums, index, maxIndex) => {
  if (index >= maxIndex) return;
  // 得到两个叶子的节点index
  const leftLeafeIndex = 2 * index + 1;
  const rightLeafIndex = 2 * index + 2;

  let max = nums[index];

  if (leftLeafeIndex <= maxIndex && nums[leftLeafeIndex] > max) {
    max = nums[leftLeafeIndex];
    swap(nums, index, leftLeafeIndex);
    heapfiy(nums, leftLeafeIndex, maxIndex);
  }
  if (rightLeafIndex <= maxIndex && nums[rightLeafIndex] > max) {
    max = nums[rightLeafIndex];
    swap(nums, index, rightLeafIndex);
    heapfiy(nums, rightLeafIndex, maxIndex);
  }
};

const rebuildHeap = (nums, lastIndex) => {
  if (nums[0] > nums[1] && nums[0] > nums[2]) {
    return;
  }
  buildHeap(nums, lastIndex);
};

const buildHeap = (nums, len) => {
  //从第一个不是叶子节点的节点开始循环
  let firstChildIndex = Math.floor((len - 1) / 2);
  for (let j = firstChildIndex; j >= 0; j--) {
    heapfiy(nums, j, len);
  }
};
export default (nums) => {
  if (!nums || nums.length <= 1) return nums;
  let last = nums.length - 1;

  // 创建堆
  buildHeap(nums, last);
  // 不断的循环，把大顶堆的数字和最后一个元素交换
  while (last > 0) {
    console.log(nums, last);
    swap(nums, 0, last);
    last--;
    if (last > 0) {
      rebuildHeap(nums, last);
    }
  }
  return nums;
};

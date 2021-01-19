/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.tree = [];
  this.build(0, nums.length - 1, 0);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  const diff = val - this.nums[index];
  this.nums[index] = val;
  this.updateUtil(0, this.nums.length - 1, 0, index, diff);
};
NumArray.prototype.updateUtil = function (left, right, treeIdx, index, diff) {
  if (index >= left && index <= right) {
    this.tree[treeIdx] += diff;
    if (left === right) return;
    var mid = left + ((right - left) >> 1);
    this.updateUtil(left, mid, treeIdx * 2 + 1, index, diff);
    this.updateUtil(mid + 1, right, treeIdx * 2 + 2, index, diff);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sumUtil(left, right, 0, this.nums.length - 1, 0);
};
NumArray.prototype.sumUtil = function (left, right, currLeft, currRight, treeIdx) {
  if (left > currRight || right < currLeft) return 0;
  if (left <= currLeft && right >= currRight) return this.tree[treeIdx];
  const mid = currLeft + ((currRight - currLeft) >> 1);
  return (
    this.sumUtil(left, right, currLeft, mid, treeIdx * 2 + 1) +
    this.sumUtil(left, right, mid + 1, currRight, treeIdx * 2 + 2)
  );
};
NumArray.prototype.build = function (left, right, idx) {
  if (left > right) return;
  const mid = left + ((right - left) >> 1);
  // 递归建立线段树
  const sum =
    left === right ? this.nums[left] : this.build(left, mid, idx * 2 + 1) + this.build(mid + 1, right, idx * 2 + 2);
  this.tree[idx] = sum;
  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

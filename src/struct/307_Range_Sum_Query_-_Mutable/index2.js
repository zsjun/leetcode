/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.segmentTree = [];
  this.buildTree(0, this.nums.length - 1, 0);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */

NumArray.prototype.update = function (index, val) {
  const diff = val - this.nums[index];
  this.nums[index] = val;
  // 从上到下更新
  this.update2Bottom(0, this.nums.length - 1, 0, index, diff);
};
NumArray.prototype.update2Bottom = function (left, right, currentIndex, index, diff) {
  if (index >= left && index <= right) {
    this.segmentTree[currentIndex] += diff;
    if (left === right) return;
    var mid = left + ((right - left) >> 1);
    this.update2Bottom(left, mid, currentIndex * 2 + 1, index, diff);
    this.update2Bottom(mid + 1, right, currentIndex * 2 + 2, index, diff);
  }
};
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sum2Bottom(left, right, 0, this.nums.length - 1, 0);
};

NumArray.prototype.sum2Bottom = function (left, right, currentLeft, currentRight, index) {
  // if (currentRight < left || right < currentLeft) return 0;
  if (currentLeft > right || currentRight < left) return 0;

  if (left <= currentLeft && right >= currentRight) return this.segmentTree[index];
  const mid = currentLeft + ((currentRight - currentLeft) >> 1);
  return (
    this.sum2Bottom(left, right, currentLeft, mid, index * 2 + 1) +
    this.sum2Bottom(left, right, mid + 1, currentRight, index * 2 + 2)
  );
};

NumArray.prototype.buildTree = function (left, right, index) {
  // if (left > right) return;
  const mid = left + ((right - left) >> 1);
  const sum =
    left === right
      ? this.nums[left]
      : this.buildTree(left, mid, index * 2 + 1) + this.buildTree(mid + 1, right, index * 2 + 2);
  this.segmentTree[index] = sum;
  return sum;
};
// export default NumArray;
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

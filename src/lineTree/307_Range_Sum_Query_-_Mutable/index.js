class LineTree {
  constructor(nums) {
    // 原始数组
    this.nums = nums;
    // 字段数数组
    this.values = [];
  }

  buildLineTree(pos, left, right) {
    if (left === right) {
      this.values[pos] = this.nums[left];
      return;
    }
    let mid = Math.floor((left + right) / 2);
    this.buildLineTree(pos * 2 + 1, left, mid);
    this.buildLineTree(pos * 2 + 2, mid + 1, right);
    this.values[pos] = this.values[pos * 2 + 1] + this.values[pos * 2 + 2] || 0;
  }
  printLineTree(pos, left, right) {
    if (left === right) {
      return;
    }
    let mid = Math.floor((left + right) / 2);
    this.printLineTree(pos * 2 + 1, left, mid);
    this.printLineTree(pos * 2 + 2, mid + 1, right);
  }
  sumRangeLineTree(pos, left, right, qLeft, qRight) {
    if (qLeft > right || qRight < left) {
      return 0;
    }
    if (qLeft <= left && qRight >= right) {
      return this.values[pos];
    }
    let mid = Math.floor((left + right) / 2);
    return (
      this.sumRangeLineTree(pos * 2 + 1, left, mid, qLeft, qRight) +
      this.sumRangeLineTree(pos * 2 + 2, mid + 1, right, qLeft, qRight)
    );
  }
  updateLineTree(pos, left, right, index, newVal) {
    if (left === right && left === index) {
      this.values[pos] = newVal;
      return;
    }
    let mid = Math.floor((left + right) / 2);
    if (index <= mid) {
      this.updateLineTree(pos * 2 + 1, left, mid, index, newVal);
    } else {
      this.updateLineTree(pos * 2 + 2, mid + 1, right, index, newVal);
    }
    this.values[pos] = this.values[pos * 2 + 1] + this.values[pos * 2 + 2] || 0;
  }
}

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  if (!nums || nums.length < 1) {
    this.val = "";
  } else {
    // nums.sort((a, b) => a - b);
    this.lineTree = new LineTree(nums);
    this.left = 0;
    this.right = nums.length - 1;
    this.lineTree.buildLineTree(0, this.left, this.right);
  }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  if (this.nums.length < 1) {
    this.val = val;
  } else {
    this.lineTree.updateLineTree(0, this.left, this.right, i, val);
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  if (this.nums.length < 1) {
    return this.val;
  } else {
    return this.lineTree.sumRangeLineTree(0, this.left, this.right, i, j);
  }
};

export default NumArray;

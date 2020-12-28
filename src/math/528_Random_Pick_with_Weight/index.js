/**
 * @param {number[]} w
 */
var Solution = function (w) {
  // this.map = {};
  // for (let i = 0; i < w.length; i++) {
  //   this.map[w[i]] = i;
  // }
  this.nums = w.map((item, index) => {
    return [item, index];
  });
  this.nums.sort((a, b) => b[0] - a[0]);
  this.pickNum = 0;
  this.pickI = 0;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const len = this.nums.length;
  if (len === 1) {
    return 0;
  }
  if (this.pickNum < this.nums[this.pickI][0] && this.pickI < len) {
    this.pickNum++;
  } else {
    this.pickNum = 1;
    if (this.pickI === len - 1) {
      this.pickI = 0;
    } else {
      this.pickI++;
    }
  }
  return this.nums[this.pickI][1];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
export default Solution;

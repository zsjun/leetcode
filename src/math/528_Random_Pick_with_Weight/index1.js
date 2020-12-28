/**
 * @param {number[]} w
 */
var Solution = function (w) {
  const len = w.length;
  this.chances = new Array(len).fill(0);
  const sum = w.reduce((a, b) => a + b);
  for (let i = 0; i < w.length; i++) {
    w[i] += i === 0 ? 0 : w[i - 1];
    this.chances[i] = w[i] / sum;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  if (this.chances.length === 1) {
    return 0;
  }
  const random = Math.random().toFixed(2);
  // console.log(this.chances);
  for (let i = 0; i < this.chances.length; i++) {
    if (random <= this.chances[i]) {
      return i;
    }
  }
  return this.chances.length - 1;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
export default Solution;

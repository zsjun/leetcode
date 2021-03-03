/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.data = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.data.length == 0) {
    this.data.push(num);
  } else {
    const len = this.data.length;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] > num) {
        this.data.splice(i, 0, num);
        break;
      }
    }
    if (this.data.length === len) {
      this.data.push(num);
    }
  }
};
// let data1 = [1, 2];
// data1.splice(0, 0, 3)
// console.log(data1);
/**
 * @return {number}
 */
//  Runtime: 316 ms, faster than 51.51% of JavaScript online submissions for Find Median from Data Stream.
//  Memory Usage: 58.3 MB, less than 58.55% of JavaScript online submissions for Find Median from Data Stream.
MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor(this.data.length / 2);
  if (this.data.length % 2 !== 0) {
    return this.data[mid];
  } else {
    return (this.data[mid] + this.data[mid - 1]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

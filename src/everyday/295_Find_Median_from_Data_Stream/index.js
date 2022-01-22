/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let low = 0;
  let high = this.arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);

    if (this.arr[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // insert at  location trick for javascript array.
  this.arr.splice(low, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const len = this.arr.length;
  if (len % 2 !== 0) {
    return this.arr[Math.floor(len / 2)];
  } else {
    return (this.arr[len / 2 - 1] + this.arr[len / 2]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

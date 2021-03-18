var Solution = function (radius, x_center, y_center) {
  this.radius = radius;
  this.x = x_center;
  this.y = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  const ang = Math.random() * 2 * Math.PI;
  const hyp = Math.sqrt(Math.random()) * this.radius;
  const adj = Math.cos(ang) * hyp;
  const opp = Math.sin(ang) * hyp;
  return [this.x + adj, this.y + opp];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */

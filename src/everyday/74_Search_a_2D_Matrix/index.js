/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Runtime: 160 ms, faster than 5.15% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 39.7 MB, less than 29.29% of JavaScript online submissions for Search a 2D Matrix.
 var searchMatrix = function(matrix, target) {
   const n = matrix.length;
   const m = matrix[0].length;
   let l = 0, r = m * n - 1;
   while (l !== r){
       const mid = (l + r - 1) >> 1;
       if (matrix[Math.floor(mid / m)][Math.floor(mid % m)] < target)
           l = mid + 1;
       else
           r = mid;
   }
   return matrix[Math.floor(r / m)][Math.floor(r % m)] === target;

};
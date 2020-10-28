/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
function remove(arr, val) {
  // remove the first element equal to val
  let ind = -1;
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      ind = i;
      break;
    }
  }
  arr.splice(ind, 1);
  return;
}
export default (buildings) => {
  let res = [];
  let height = [];
  let pq = [0];
  let prevMax = null;

  for (let b of buildings) {
    // this means the rect start
    height.push([b[0], -b[2]]);
    // this means the rect end
    height.push([b[1], b[2]]);
  }
  height.sort((a, b) => {
    // if two rect start position is same, put height max to after
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    // if two rect start position is diff, put x position min to before
    return a[0] - b[0];
  });

  for (let h of height) {
    // if meet the start,put into pq
    if (h[1] < 0) {
      pq.push(-h[1]);
    } else {
      // if meet the end, remove
      remove(pq, h[1]);
    }

    let maxV = Math.max(...pq);
    if (prevMax !== maxV) {
      // maxV changed after remove h[1]
      res.push([h[0], maxV]);
      prevMax = maxV;
    }
  }
  return res;
};

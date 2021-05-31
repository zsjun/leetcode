const rotSub = (root) => {
  if (root === null) return [0, 0];

  const left = rotSub(root.left);
  const right = rotSub(root.right);
  const res = new Array(2).fill(0);

  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  res[1] = root.val + left[0] + right[0];

  return res;
};
// Runtime: 92 ms, faster than 79.47% of JavaScript online submissions for House Robber III.
// Memory Usage: 43.1 MB, less than 73.68% of JavaScript online submissions for House Robber III.
export default (root) => {
  let res = robSub(root);
  return Math.max(res[0], res[1]);
};

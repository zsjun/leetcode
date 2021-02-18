/**
 * @param {number[][]} edges
 * @return {number[]}
 */
import BingchaSet from "../bingchaSet/index";
// Runtime: 368 ms, faster than 5.94% of JavaScript online submissions for Redundant Connection.
// Memory Usage: 48.9 MB, less than 5.45% of JavaScript online submissions for Redundant Connection.
export default (edges) => {
  const len = edges.length;
  const bingset = new BingchaSet(len);
  for (let [u, v] of edges) {
    const x = bingset.find(u - 1);
    const y = bingset.find(v - 1);
    if (x !== y) {
      bingset.merge(u - 1, v - 1);
    } else {
      return [u, v];
    }
  }
};

/**
 * @param {string} path
 * @return {string}
 */
// Runtime: 84 ms, faster than 66.47% of JavaScript online submissions for Simplify Path.
// Memory Usage: 43.7 MB, less than 8.38% of JavaScript online submissions for Simplify Path.
export default (path) => {
  if (!path) return "";
  const stack = path.split("/").filter((item) => item);
  let res = ["/"];
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === ".") {
      stack[i] = "";
    } else if (stack[i] === "..") {
      if (res.length > 1) {
        res.pop();
      }
    } else {
      res.push(stack[i] + "/");
    }
  }
  res = res.length > 1 ? res.join("") : "/";
  return res.length > 1 ? res.substr(0, res.length - 1) : "/";
};

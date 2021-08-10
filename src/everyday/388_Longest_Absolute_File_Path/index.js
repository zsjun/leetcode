/**
 * @param {string} input
 * @return {number}
 */
// Runtime: 64 ms, faster than 93.28% of JavaScript online submissions for Longest Absolute File Path.
// Memory Usage: 38.7 MB, less than 54.48% of JavaScript online submissions for Longest Absolute File Path.
// "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"

// [ "dir", "\tsubdir1", "\tsubdir2", "\t\tfile.ext" ]
// "\tsubdir1".lastIndexOf("\t") =0
// "\t\tfile.ext".lastIndexOf("\t") =1
export default (input) => {
  const paths = input.split("\n");
  const stack = new Array(paths.length + 1).fill(0);
  let maxLen = 0;
  for (let str of paths) {
    // 获取当前第几层目录
    let level = str.lastIndexOf("\t") + 1;
    // 获取到该目录下的字符串数目，比如是dir/, 然后减去\t的数目，并且加上/
    stack[level + 1] = stack[level] + str.length - level + 1;
    let curLen = stack[level + 1];
    if (str.includes(".")) {
      maxLen = Math.max(maxLen, curLen - 1);
    }
  }
  return maxLen;
};

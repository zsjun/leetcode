/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalind = (s, start, end) => {
  let res = true;
  while (start <= end) {
    if (s.charAt(start) !== s.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return res;
};
const genStr = (res, tempList, s, start) => {
  if (tempList.join("").length === s.length) {
    res.push([...tempList]);
  }
  if (start >= s.length) {
    return;
  }
  for (let i = start; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalind(s, i, j)) {
        tempList.push(s.substring(i, j + 1));
        genStr(res, tempList, s, j + 1);
        tempList.pop();
      }
    }
  }
};
var partition = function (s) {
  const res = [];
  genStr(res, [], s, 0);
  return res;
};

//2. 打印所有回文串的组合
// input: aabcbba
// output:
/*
[
  [ 'a', 'a', 'b', 'c', 'b', 'b', 'a' ],
  [ 'a', 'a', 'b', 'c', 'bb', 'a' ],
  [ 'a', 'a', 'bcb', 'b', 'a' ],
  [ 'aa', 'b', 'c', 'b', 'b', 'a' ],
  [ 'aa', 'b', 'c', 'bb', 'a' ],
  [ 'aa', 'bcb', 'b', 'a' ]
]
*/
// 回溯法
// 1. 首先使用最少的
// 2. push 和 pop
const isPalindrome = (str, i, j) => {
  if (i === j) return true;
  while (i <= j) {
    if (str.charAt(i) === str.charAt(j)) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

const backtrack = (list, tempList, s, i) => {
  if (i === s.length) {
    list.push([...tempList]);
  } else {
    for (let k = i; k < s.length; k++) {
      if (isPalindrome(s, i, k)) {
        tempList.push(s.substring(i, k + 1));
        backtrack(list, tempList, s, k + 1);
        tempList.pop();
        // tempList.splice(tempList.length - 1, 1);
      }
    }
  }
};
const partition = function (str) {
  let list = [];
  let tempList = [];
  backtrack(list, tempList, str, 0);
  return list;
};

console.log(partition("aabcbba"));

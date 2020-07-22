const isPalindrome = (s, low, high) => {
  while (low < high) if (s.charAt(low++) != s.charAt(high--)) return false;
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
        tempList.splice(tempList.length - 1, 1);
      }
    }
  }
};

/**
 * @param {string} s
 * @return {string[][]}
 */
export default function subsets(s) {
  let list = [];
  let tempList = [];
  backtrack(list, tempList, s, 0);
  return list;
}

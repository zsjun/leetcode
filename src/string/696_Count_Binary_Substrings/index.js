/**
 * @param {string} s
 * @return {number}
 */

export default (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let count0 = 0;
    let j = i;
    let flag = s.charAt(j);
    while (s.charAt(j) === flag) {
      j++;
      count0++;
    }
    // console.log(i,count0)
    flag = flag === "0" ? "1" : "0";
    while (j + count0 < s.length && s.charAt(j) === flag) {
      j++;
      count0--;
      if (count0 === 0) {
        count++;
        break;
      }
    }
  }
  return count;
};

export default (str, mode) => {
  let modeArr = mode.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g);
  let cur = 0;
  let strLength = str.length;

  for (let i = 0; i < modeArr.length; i++) {
    // check three mode .*|a*|add
    let m = modeArr[i].split("");
    if (m[1] === "*") {
      if (m[0] === ".") {
        return true;
      } else {
        while (str[cur] === m[0]) {
          cur++;
        }
      }
    } else {
      for (let j = 0; j < m.length; j++) {
        if (m[j] !== str[cur]) {
          return false;
        } else {
          cur++;
        }
      }
    }
  }
  return cur === strLength;
};

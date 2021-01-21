/**
 * @param {string} si
 * @return {number}
 */
// "3+2*2";
// 7;
// s = " 3/2 ";
// 1;
// (" 3+5 / 2 ");
// 5;
export default (s) => {
  const numberStack = [];
  const oprStack = [];
  let begin = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      case "+":
        oprStack.push("+");
        numberStack.push(s.substring(begin, i + 1));
        begin = i + 1;
        break;
      case "+":
        oprStack.push("+");
        numberStack.push(s.substring(begin, i + 1));
        begin = i + 1;
        break;

      default:
        break;
    }
  }
  if (oprStack.length === 0) {
    s = s.trim();
    return +s;
  }
};

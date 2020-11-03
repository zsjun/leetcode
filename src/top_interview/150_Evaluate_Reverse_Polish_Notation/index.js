/**
 * @param {string[]} tokens
 * @return {number}
 */
export default (tokens) => {
  let nums = [];
  for (let i = 0; i < tokens.length; i++) {
    if (/\d/g.test(tokens[i])) {
      nums.push(+tokens[i]);
    } else {
      let first = nums[nums.length - 1];
      const second = nums[nums.length - 2];
      nums.pop();
      nums.pop();
      switch (tokens[i]) {
        case "+":
          first = first + second;
          break;
        case "-":
          first = second - first;
          break;
        case "*":
          first = first * second;
          break;
        case "/":
          first = second / first;
          if (first < 0) {
            first = Math.ceil(first);
          } else {
            first = Math.floor(first);
          }
          break;
        default:
          break;
      }
      nums.push(first);
    }
  }
  return nums[0];
};

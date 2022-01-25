/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
//
// "1432219"
var removeKdigits = function (num, k) {
  const stack = [];
  let removed = 0;
  //
  for (let val of num) {
    while (stack.length > 0 && val < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed += 1;
    }
    stack.push(n);
  }

  // remove all remaining large numbers
  while (removed < k) {
    stack.pop();
    removed += 1;
  }

  // remove all beginning zeroes
  while (stack.length > 0 && stack[0] === "0") {
    stack.shift();
  }

  return stack.length ? stack.join("") : "0";
};

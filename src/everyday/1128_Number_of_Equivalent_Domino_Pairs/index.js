/**
 * @param {number[][]} dominoes
 * @return {number}
 */
// Runtime: 3548 ms, faster than 25.42% of JavaScript online submissions for Number of Equivalent Domino Pairs.
// Memory Usage: 43.3 MB, less than 75.42% of JavaScript online submissions for Number of Equivalent Domino Pairs.
export default (dominoes) => {
  if (!dominoes || dominoes.length === 1) return 0;
  let res = 0;
  for (let i = 0; i < dominoes.length; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      if (
        (dominoes[i][0] === dominoes[j][0] &&
          dominoes[i][1] === dominoes[j][1]) ||
        (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0])
      ) {
        res++;
      }
    }
  }
  return res;
};

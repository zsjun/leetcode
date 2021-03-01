/**
 * @param {number[]} candyType
 * @return {number}
 */
export default (candyType) => {
  const len = candyType.length;
  const maxEatNumber = Math.floor(len / 2);
  candyType = Array.from(new Set(candyType));
  return candyType.length > maxEatNumber ? maxEatNumber : candyType.length;
};

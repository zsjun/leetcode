/**
 * @param {number} n
 * @return {string}
 */

const convertToTitle = (n) => {
  if (n === 0) return "";
  return convertToTitle(Math.floor(--n / 26)) + String.fromCharCode("A".charCodeAt() + (n % 26));
};
export default convertToTitle;

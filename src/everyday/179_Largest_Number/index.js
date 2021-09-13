/**
 * @param {number[]} nums
 * @return {string}
 */
export default (nums) => {
  if (nums === null || nums.length === 0) return "";

  const s_num = nums.map((item) => "" + item);

  s_num.sort((a, b) => {
    const s1 = a + b;
    const s2 = b + a;
    return s2.localeCompare(s1);
  });
  if (s_num[0].charAt(0) == "0") return "0";

  return s_num.join("");
};

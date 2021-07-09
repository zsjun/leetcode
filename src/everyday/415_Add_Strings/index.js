/*
 * @Description:
 * @Author: zsj
 * @Date: 2021-07-09 11:23:35
 * @LastEditTime: 2021-07-09 11:44:30
 * @LastEditors: zsj
 * @Usage:
 */
//  Runtime: 80 ms, faster than 89.40% of JavaScript online submissions for Add Strings.
//  Memory Usage: 41.8 MB, less than 12.82% of JavaScript online submissions for Add Strings.
export default (num1, num2) => {
  if (num2 === "0" && num1 === "0") return "0";
  // 进位标志数组
  const prod = new Array(num1.length + num2.length).fill(0);
  let currIdx = prod.length - 1;

  if (num1.length < num2.length) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  let num2Index = num2.length - 1;
  // console.log(num1,num2)
  for (let i = num1.length - 1; i >= 0; i--) {
    if (num2Index >= 0) {
      const res = +num1[i] + +num2[num2Index] + prod[currIdx];
      // console.log(+num1[i],+num2[num2Index], prod[currIdx])
      prod[currIdx] = res % 10;
      currIdx--;
      prod[currIdx] += Math.floor(res / 10);
      num2Index--;
    } else {
      const res = +num1[i] + prod[currIdx];
      prod[currIdx] = res % 10;
      currIdx--;
      prod[currIdx] += Math.floor(res / 10);
    }
  }
  // console.log(prod)
  return prod.join("").replace(/^0+/, "");
};

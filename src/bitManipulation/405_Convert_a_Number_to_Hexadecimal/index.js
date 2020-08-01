/**
 * @param {number} num
 * @return {string}
 */

export default (num) => {
  if (!num) return "0";

  const hexArr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let str_16 = [];
  for (let i = 0; num && i < 8; i++) {
    str_16.push(hexArr[0b1111 & num]);
    num >>= 4;
  }
  console.log(str_16);
  return str_16.reverse().join("");
};

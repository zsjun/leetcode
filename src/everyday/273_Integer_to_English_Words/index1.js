/**
 * @param {number} num
 * @return {string}
 */
// Input: num = 123
// Output: "One Hundred Twenty Three"

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"

const LESS_THAN_20 = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const TENS = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

const getRes = (num) => {
  let res = "";
  if (num < 1000) {
    if (num < 100) {
      if (num < 20) {
        res = LESS_THAN_20[num];
      } else {
        let cur = num / 10;
        let index = num % 10;
        res += TENS[cur] + LESS_THAN_20[index];
      }
    } else {
      let cur = num / 10;
      let index = num % 10;
      if (index >= 1) {
        res +=
          LESS_THAN_20[index] + "Hundred" + TENS[cur] + LESS_THAN_20[index];
      } else {
        res += TENS[cur] + LESS_THAN_20[index];
      }
    }
  } else {
    let thundCur = num / 1000;
    res += THOUSANDS[thundCur];
  }
};
const helper = (num) => {
  if (num === 0) return "";
  else if (num < 20) return LESS_THAN_20[num] + " ";
  else if (num < 100)
    return TENS[Math.floor(num / 10)] + " " + helper(num % 10);
  else
    return (
      LESS_THAN_20[Math.floor(num / 100)] + " Hundred " + helper(num % 100)
    );
};

var numberToWords = function (num) {
  if (num === 0) return "Zero";

  let i = 0;
  let words = "";
  // Input:  num = 1234567
  // Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
  while (num > 0) {
    if (num % 1000 !== 0) {
      words = helper(num % 1000) + THOUSANDS[i] + " " + words;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return words.trim();
};

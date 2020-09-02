import longestPalindrome from "../../../src/dp/5_Longest_Palindromic_Substring/index";

test("1", () => {
  expect(longestPalindrome("babad")).toBe("aba");
});

test("2", () => {
  expect(longestPalindrome("abcba")).toBe("abcba");
});

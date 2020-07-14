import lengthOfLongestSubstring from "../../../src/hashMap/3_Longest_Substring_Without_Repeating_Characters/index";

test("1", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});
test("2", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});
test("3", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});
test("4", () => {
  expect(lengthOfLongestSubstring("abba")).toBe(2);
});

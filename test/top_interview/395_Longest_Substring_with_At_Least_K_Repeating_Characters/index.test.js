import longestSubstring from "../../../src/top_interview/395_Longest_Substring_with_At_Least_K_Repeating_Characters/index";

test("1", () => {
  expect(longestSubstring("aaabb", 3)).toBe(3);
});

test("2", () => {
  expect(longestSubstring("ababacb", 3)).toBe(0);
});

test("3", () => {
  expect(longestSubstring("aaabbb", 3)).toBe(6);
});

test("4", () => {
  expect(longestSubstring("bbaaacbd", 3)).toBe(3);
});

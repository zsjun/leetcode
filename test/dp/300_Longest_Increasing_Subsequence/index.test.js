import lengthOfLIS from "../../../src/dp/300_Longest_Increasing_Subsequence/index";

test("1", () => {
  expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
});

test("2", () => {
  expect(lengthOfLIS([2, 2])).toBe(1);
});

test("2", () => {
  expect(lengthOfLIS([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12])).toBe(6);
});

import longestConsecutive from "../../../src/array/128_Longest_Consecutive_Sequence/index";

test("1", () => {
  expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
});

test("1", () => {
  expect(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])).toBe(7);
});

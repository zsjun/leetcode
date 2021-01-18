import findLHS from "../../../src/struct/594_Longest_Harmonious_Subsequence/index";

test("1", () => {
  expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toEqual(5);
});

test("2", () => {
  expect(findLHS([1, 1, 1, 1])).toEqual(0);
});

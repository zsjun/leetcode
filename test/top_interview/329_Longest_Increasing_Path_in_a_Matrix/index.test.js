import longestIncreasingPath from "../../../src/top_interview/329_Longest_Increasing_Path_in_a_Matrix/index";

test("1", () => {
  expect(
    longestIncreasingPath([
      [9, 9, 4],
      [6, 6, 8],
      [2, 1, 1],
    ])
  ).toBe(4);
});

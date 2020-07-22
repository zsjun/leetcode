import subsets from "../../../src/backtrack/131_Palindrome_Partitioning/index";

// test("1", () => {
//   expect(subsets([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
//     [1, 1, 6],
//     [1, 2, 5],
//     [1, 7],
//     [2, 6],
//   ]);
// });
test("1", () => {
  expect(subsets("aab")).toEqual([
    ["a", "a", "b"],
    ["aa", "b"],
  ]);
});

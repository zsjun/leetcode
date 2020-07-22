import subsets from "../../../src/backtrack/39_Combination_Sum/index";

// test("1", () => {
//   expect(subsets([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
//     [1, 1, 6],
//     [1, 2, 5],
//     [1, 7],
//     [2, 6],
//   ]);
// });
test("1", () => {
  expect(subsets([2, 3, 5], 8)).toEqual([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ]);
});

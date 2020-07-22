import subsets from "../../../src/backtrack/47_Permutations_II/index";

test("1", () => {
  expect(subsets([1, 1, 2])).toEqual([
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ]);
});

import permute from "../../../src/deepAndBreadthSearch/46_Permutations/index";

test("1", () => {
  expect(permute([1, 2, 3])).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});

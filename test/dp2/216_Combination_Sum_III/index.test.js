import combinationSum3 from "../../../src/dp2/216_Combination_Sum_III/index";

test("1", () => {
  expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]]);
});

test("2", () => {
  expect(combinationSum3(2, 18)).toEqual([]);
});

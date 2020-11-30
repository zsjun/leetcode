import sortColors from "../../../src/sort/75_Sort_Colors/index1";

test("1", () => {
  expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
});

test("2", () => {
  expect(sortColors([2, 0])).toEqual([0, 2]);
});
//[2, 0];

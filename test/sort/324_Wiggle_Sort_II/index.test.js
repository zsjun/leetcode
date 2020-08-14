import wiggleSort from "../../../src/sort/324_Wiggle_Sort_II/index";

test("1", () => {
  expect(wiggleSort([1, 5, 1, 1, 6, 4])).toEqual([1, 5, 1, 6, 1, 4]);
});

test("2", () => {
  expect(wiggleSort([1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2])).toEqual([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]);
});

test("3", () => {
  expect(wiggleSort([1, 3, 2, 2, 2, 1, 1, 3, 1, 1, 2])).toEqual([2, 3, 1, 3, 1, 2, 1, 2, 1, 2, 1]);
});

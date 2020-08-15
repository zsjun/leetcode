import nextPermutation from "../../../src/sort/31_Next_Permutation/index";

test("1", () => {
  expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
});

test("2", () => {
  expect(nextPermutation([2, 3, 1])).toEqual([3, 1, 2]);
});
test("3", () => {
  expect(nextPermutation([1, 3, 2])).toEqual([2, 1, 3]);
});
test("4", () => {
  expect(nextPermutation([5, 1, 1])).toEqual([1, 1, 5]);
});

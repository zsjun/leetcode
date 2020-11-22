import merge from "../../../src/twoPoints/88_Merge_Sorted_Array/index1";

// test("1", () => {
//   expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
// });

// test("2", () => {
//   expect(merge([0], 0, [1], 1)).toEqual([1]);
// });

test("3", () => {
  expect(merge([2, 0], 1, [1], 1)).toEqual([1, 2]);
});

import getTargetPosition from "../../../src/array/34/index";

// test(`arr:1`, () => {
//   expect(getMaxRect([])).toBe(0);
// });

// test(`arr:1`, () => {
//   expect(getTargetPosition([5, 7, 7, 8, 8, 10, 11], 8)).toEqual([3, 4]);
// });

// [1, 2];
// [1]
// 1
test(`arr:1`, () => {
  expect(getTargetPosition([1], 1)).toEqual([0, 0]);
});
test(`arr:2`, () => {
  expect(getTargetPosition([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
});
test(`arr:3`, () => {
  expect(getTargetPosition([1], 1)).toEqual([0, 0]);
});

test(`arr:3`, () => {
  expect(getTargetPosition([2, 2], 2)).toEqual([0, 1]);
});
test(`arr:4`, () => {
  expect(getTargetPosition([1, 4], 4)).toEqual([1, 1]);
});

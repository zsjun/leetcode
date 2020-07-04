import getTargetPosition from "../../src/34/index";

// test(`arr:1`, () => {
//   expect(getMaxRect([])).toBe(0);
// });

// test(`arr:1`, () => {
//   expect(getTargetPosition([5, 7, 7, 8, 8, 10, 11], 8)).toEqual([3, 4]);
// });

// [1, 2];

test(`arr:2`, () => {
  expect(getTargetPosition([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
});
test(`arr:3`, () => {
  expect(getTargetPosition([1], 1)).toEqual([0, 0]);
});

test(`arr:3`, () => {
  expect(getTargetPosition([1], 1)).toEqual([0, 0]);
});

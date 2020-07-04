import maxArea from "../../src/11/index";

// test(`arr:1`, () => {
//   expect(getMaxRect([])).toBe(0);
// });

// test(`arr:1`, () => {
//   expect(getTargetPosition([5, 7, 7, 8, 8, 10, 11], 8)).toEqual([3, 4]);
// });

// [1, 2];

test(`arr:2`, () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

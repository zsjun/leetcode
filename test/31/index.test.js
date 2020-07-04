import nextArr from "../../src/31/index";

// test(`arr:1`, () => {
//   expect(getMaxRect([])).toBe(0);
// });

test(`arr:1`, () => {
  expect(nextArr([1, 2, 3])).toEqual([1, 3, 2]);
});

// [1, 2];

test(`arr:2`, () => {
  expect(nextArr([1, 2])).toEqual([2, 1]);
});
test(`arr:3`, () => {
  expect(nextArr([1, 1])).toEqual([1, 1]);
});
// [2, 3, 1];

test(`arr:4`, () => {
  expect(nextArr([2, 3, 1])).toEqual([3, 1, 2]);
});

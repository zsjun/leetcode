import findMin from "../../../../src/array/154/index";

// test(`arr:1`, () => {
//   expect(getMaxRect([])).toBe(0);
// });

// test(`arr:1`, () => {
//   expect(getTargetPosition([5, 7, 7, 8, 8, 10, 11], 8)).toEqual([3, 4]);
// });

// [1, 2];

test(`arr:2`, () => {
  expect(findMin([1, 3, 5])).toBe(1);
});
test(`arr:3`, () => {
  expect(findMin([2, 2, 2, 0, 1])).toEqual(0);
});
test(`arr:5`, () => {
  expect(findMin([1, 1])).toEqual(1);
});
test(`arr:6`, () => {
  expect(findMin([3, 1, 3])).toEqual(1);
});

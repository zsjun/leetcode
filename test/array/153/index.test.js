import findMin from "../../../../src/array/153/index.next";

// test(`arr:1`, () => {
//   expect(getMaxRect([])).toBe(0);
// });

// test(`arr:1`, () => {
//   expect(getTargetPosition([5, 7, 7, 8, 8, 10, 11], 8)).toEqual([3, 4]);
// });

// [1, 2];

test(`arr:2`, () => {
  expect(findMin([3, 4, 5, 1, 2])).toBe(1);
});
test(`arr:3`, () => {
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
});
// test(`arr:5`, () => {
//   expect(findMin([4, 5, 6, 7, 3, 8, 0, 1, 2])).toEqual(0);
// });

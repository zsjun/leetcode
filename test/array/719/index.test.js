import findTrap from "../../../src/array/719/index1";

// test(`arr:2`, () => {
//   expect(findTrap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
// });
// test(`arr:3`, () => {
//   expect(findTrap([2, 2, 0, 1, 1, 0, 0, 1, 2, 0], 2)).toEqual(0);
// });

// test(`arr:4`, () => {
//   expect(findTrap([9, 10, 7, 10, 6, 1, 5, 4, 9, 8], 18)).toEqual(2);
// });
test(`arr:5`, () => {
  expect(findTrap([1, 3, 1], 1)).toEqual(0);
});

3;
test(`arr:5`, () => {
  expect(findTrap([1, 6, 1], 3)).toEqual(5);
});

2;
test(`arr:5`, () => {
  expect(findTrap([62, 100, 4], 2)).toEqual(58);
});
// test(`arr:5`, () => {
//   expect(
//     findTrap(
//       [
//         2,
//         2,
//         0,
//         1,
//         0,
//         1,
//         2,
//         0,
//         2,
//         1,
//         1,
//         1,
//         1,
//         0,
//         1,
//         2,
//         1,
//         1,
//         1,
//         2,
//         1,
//         2,
//         1,
//         0,
//         1,
//         0,
//         1,
//         1,
//         0,
//         2,
//         1,
//         0,
//         0,
//         2,
//         2,
//         1,
//         1,
//         1,
//         2,
//         2,
//         1,
//         0,
//         0,
//         0,
//         2,
//         0,
//         0,
//         0,
//         0,
//         0,
//         1,
//         0,
//         1,
//         2,
//         2,
//         2,
//         2,
//         2,
//         2,
//         1,
//         1,
//         0,
//         1,
//         0,
//         1,
//         1,
//         1,
//         1,
//         2,
//         1,
//         1,
//         2,
//         2,
//         2,
//         0,
//         1,
//         2,
//         2,
//         2,
//         0,
//         0,
//         2,
//         0,
//         1,
//         2,
//         2,
//         1,
//         2,
//         0,
//         2,
//         1,
//         0,
//         0,
//         2,
//         1,
//         1,
//         0,
//         1,
//         0,
//         1,
//         0,
//         0,
//         0,
//         1,
//         1,
//         2,
//         0,
//         0,
//         1,
//         2,
//         2,
//         2,
//         2,
//         2,
//         2,
//         0,
//         2,
//         1,
//         1,
//         1,
//         1,
//         1,
//         2,
//         0,
//         2,
//         2,
//         2,
//         0,
//         2,
//         0,
//         1,
//         0,
//         1,
//         2,
//         1,
//         0,
//         1,
//         2,
//         1,
//         2,
//         1,
//         2,
//         0,
//         2,
//         0,
//         1,
//         0,
//         1,
//         2,
//         2,
//         1,
//         2,
//         2,
//         1,
//         0,
//         0,
//         1,
//         2,
//         1,
//         1,
//         0,
//         0,
//         2,
//         1,
//         0,
//         2,
//         1,
//         2,
//         0,
//         0,
//         1,
//         0,
//         2,
//         0,
//         1,
//         2,
//         2,
//         2,
//         1,
//         2,
//         0,
//         2,
//         2,
//         2,
//         2,
//         2,
//         0,
//         0,
//         0,
//         1,
//         0,
//         2,
//         0,
//         0,
//         1,
//         1,
//         0,
//         0,
//         2,
//         2,
//         1,
//         0,
//         0,
//         0,
//         2,
//         0,
//         1,
//         1,
//         1,
//         2,
//         1,
//         1,
//         2,
//         1,
//         1,
//         0,
//         1,
//         0,
//         1,
//         1,
//         1,
//         2,
//         0,
//         0,
//         2,
//         2,
//         2,
//         1,
//         1,
//         1,
//         2,
//         2,
//         2,
//         0,
//         1,
//         0,
//         0,
//         0,
//         0,
//         1,
//         0,
//         2,
//         2,
//         0,
//         2,
//         2,
//         1,
//         1,
//         1,
//         2,
//         1,
//         1,
//         1,
//         0,
//         2,
//         0,
//         2,
//         1,
//         1,
//         2,
//         2,
//         1,
//         1,
//         2,
//         0,
//         0,
//         2,
//         1,
//         2,
//         0,
//         1,
//         1,
//         1,
//         2,
//         2,
//         0,
//         1,
//         2,
//         2,
//         2,
//         1,
//         1,
//         0,
//         1,
//         0,
//         0,
//         1,
//         2,
//         1,
//         1,
//         0,
//         1,
//         0,
//         2,
//         2,
//         2,
//         0,
//         1,
//         1,
//         0,
//         1,
//         0,
//         1,
//         2,
//         2,
//         2,
//         1,
//         1,
//         0,
//         1,
//         0,
//         0,
//         2,
//         1,
//         1,
//         1,
//         0,
//         0,
//         0,
//         0,
//         2,
//         2,
//         2,
//         0,
//         1,
//         0,
//         2,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         2,
//         0,
//         1,
//         0,
//         0,
//         0,
//         1,
//         1,
//         2,
//         2,
//         1,
//         2,
//         2,
//         0,
//         2,
//         1,
//         0,
//         2,
//         1,
//         2,
//         0,
//         1,
//         2,
//         1,
//         2,
//         2,
//         2,
//         2,
//         2,
//         0,
//         0,
//         1,
//         0,
//         0,
//         2,
//         2,
//         0,
//         1,
//         0,
//         0,
//         0,
//         2,
//         1,
//         0,
//         1,
//         2,
//         1,
//         1,
//         0,
//         0,
//         1,
//         1,
//         0,
//         0,
//         2,
//         2,
//         2,
//         1,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         1,
//         0,
//         1,
//         2,
//         0,
//         1,
//         1,
//         2,
//         1,
//         0,
//         0,
//         0,
//         2,
//         2,
//         1,
//         2,
//         2,
//         0,
//         0,
//         1,
//         0,
//         1,
//         0,
//         0,
//         1,
//         2,
//         0,
//         0,
//         0,
//         1,
//         1,
//         0,
//         0,
//         1,
//         0,
//         0,
//         0,
//         0,
//         0,
//         2,
//         0,
//         2,
//         0,
//         0,
//         0,
//         0,
//         0,
//         1,
//         2,
//         1,
//         1,
//         1,
//         2,
//         2,
//         0,
//         2,
//         1,
//         0,
//         2,
//         1,
//         0,
//         2,
//         1,
//         1,
//         0,
//         2,
//         0,
//         2,
//         1,
//         0,
//         0,
//         0,
//         1,
//         1,
//         0,
//         1,
//         0,
//         2,
//         2,
//         2,
//         1,
//         2,
//         0,
//         1,
//         2,
//         0,
//         0,
//         0,
//         2,
//         2,
//         2,
//         1,
//         1,
//         1,
//         2,
//         2,
//         2,
//         2,
//         0,
//         1,
//         0,
//         0,
//         1,
//       ],
//       62500
//     )
//   ).toEqual(2);
// });

// test(`arr:4`, () => {
//   expect(findTrap([1, 3, 1], 1)).toEqual(0);
// });
// test(`arr:5`, () => {
//   expect(findTrap([1, 1])).toEqual(1);
// });
// test(`arr:6`, () => {
//   expect(findTrap([3, 1, 3])).toEqual(1);
// });

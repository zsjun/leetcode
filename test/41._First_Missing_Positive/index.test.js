import getTargetPosition from "../../src/41._First_Missing_Positive/index";

// test(`arr:2`, () => {
//   expect(getTargetPosition([1, 2, 0])).toEqual(3);
// });

// test(`arr:3`, () => {
//   expect(getTargetPosition([3, 4, -1, 1])).toEqual(2);
// });
test(`arr:4`, () => {
  expect(
    getTargetPosition([
      3,
      -1,
      23,
      7,
      21,
      12,
      8,
      9,
      18,
      21,
      -1,
      16,
      1,
      13,
      -3,
      22,
      23,
      13,
      7,
      14,
      3,
      6,
      4,
      -3,
    ])
  ).toEqual(2);
});

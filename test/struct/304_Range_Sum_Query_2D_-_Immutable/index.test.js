import NumMatrix from "../../../src/struct/304_Range_Sum_Query_2D_-_Immutable/index";
// [
//   [
//     [
//       [3, 0, 1, 4, 2],
//       [5, 6, 3, 2, 1],
//       [1, 2, 0, 1, 5],
//       [4, 1, 0, 1, 7],
//       [1, 0, 3, 0, 5],
//     ],
//   ],
//   [2, 1, 4, 3],
//   [1, 1, 2, 2],
//   [1, 2, 2, 4],
// ];
test("1", () => {
  const matrix = new NumMatrix([
    [3, 5, 1, 2],
    [0, 7, 9, 4],
    [8, 1, 6, 2],
    [2, 3, 0, 5],
  ]);
  matrix.sumRegion(2, 1, 4, 3);
});

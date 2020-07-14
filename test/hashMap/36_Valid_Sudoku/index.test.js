import isValidSudoku from "../../../src/hashMap/36_Valid_Sudoku/index";

// test("1", () => {
//   expect(
//     isValidSudoku([
//       ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//       ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//       [".", "9", "8", ".", ".", ".", ".", "6", "."],
//       ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//       ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//       ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//       [".", "6", ".", ".", ".", ".", "2", "8", "."],
//       [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//       [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//     ])
//   ).toBe(true);
// });

// test("2", () => {
//   expect(
//     isValidSudoku([
//       ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//       ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//       [".", "9", "8", ".", ".", ".", ".", "6", "."],
//       ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//       ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//       ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//       [".", "6", ".", ".", ".", ".", "2", "8", "."],
//       [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//       [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//     ])
//   ).toBe(false);
// });
test("3", () => {
  expect(
    isValidSudoku([
      [".", ".", ".", ".", "5", ".", ".", "1", "."],
      [".", "4", ".", "3", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "3", ".", ".", "1"],
      ["8", ".", ".", ".", ".", ".", ".", "2", "."],
      [".", ".", "2", ".", "7", ".", ".", ".", "."],
      [".", "1", "5", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "2", ".", ".", "."],
      [".", "2", ".", "9", ".", ".", ".", ".", "."],
      [".", ".", "4", ".", ".", ".", ".", ".", "."],
    ])
  ).toBe(false);
});
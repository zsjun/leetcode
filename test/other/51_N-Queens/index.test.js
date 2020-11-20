import solveNQueens from "../../../src/other/51_N-Queens/index";

test("1", () => {
  expect(solveNQueens(4)).toEqual([
    [".Q..", "...Q", "Q...", "..Q."],
    ["..Q.", "Q...", "...Q", ".Q.."],
  ]);
});

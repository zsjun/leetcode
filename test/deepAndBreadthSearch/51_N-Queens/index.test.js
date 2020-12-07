import solveNQueens from "../../../src/deepAndBreadthSearch/51_N-Queens/index";

test("1", () => {
  expect(solveNQueens(4)).toEqual([
    [".Q..", "...Q", "Q...", "..Q."],
    ["..Q.", "Q...", "...Q", ".Q.."],
  ]);
});

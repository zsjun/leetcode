import pacificAtlantic from "../../../src/deepAndBreadthSearch/417_Pacific_Atlantic_Water_Flow/index1";

test("1", () => {
  expect(
    pacificAtlantic([
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4],
    ])
  ).toEqual([
    [0, 4],
    [1, 3],
    [1, 4],
    [2, 2],
    [3, 0],
    [3, 1],
    [4, 0],
  ]);
});

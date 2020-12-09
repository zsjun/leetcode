import solve from "../../../src/deepAndBreadthSearch/130_Surrounded_Regions/index";

test("1", () => {
  expect(
    solve([
      ["X", "X", "X", "X"],
      ["X", "O", "O", "X"],
      ["X", "X", "O", "X"],
      ["X", "O", "X", "X"],
    ])
  ).toEqual([
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "O", "X", "X"],
  ]);
});

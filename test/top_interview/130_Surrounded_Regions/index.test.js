import solve from "../../../src/top_interview/130_Surrounded_Regions/index";

test("1", () => {
  expect(
    solve([
      ["O", "X", "X", "O", "X"],
      ["X", "O", "O", "X", "O"],
      ["X", "O", "X", "O", "X"],
      ["O", "X", "O", "O", "O"],
      ["X", "X", "O", "X", "O"],
    ])
  ).toEqual([
    ["O", "X", "X", "O", "X"],
    ["X", "X", "X", "X", "O"],
    ["X", "X", "X", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"],
  ]);
});

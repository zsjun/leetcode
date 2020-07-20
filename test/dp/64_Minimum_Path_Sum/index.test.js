import minPathSum from "../../../src/dp/64_Minimum_Path_Sum/index";

test("1", () => {
  expect(
    minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ])
  ).toBe(7);
});

import calculateMinimumHP from "../../../src/dp/174_Dungeon_Game/index";

test("1", () => {
  expect(
    calculateMinimumHP([
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
    ])
  ).toBe(7);
});

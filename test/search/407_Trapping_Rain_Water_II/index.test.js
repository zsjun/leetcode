import trapRainWater from "../../../src/search/407_Trapping_Rain_Water_II/index";

test("1", () => {
  expect(
    trapRainWater([
      [1, 4, 3, 1, 3, 2],
      [3, 2, 1, 3, 2, 4],
      [2, 3, 3, 2, 3, 1],
    ])
  ).toBe(4);
});

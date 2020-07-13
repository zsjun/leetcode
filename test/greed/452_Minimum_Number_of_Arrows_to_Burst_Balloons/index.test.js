import findMinArrowShots from "../../../src/greed/452_Minimum_Number_of_Arrows_to_Burst_Balloons/index";

test("1", () => {
  expect(
    findMinArrowShots([
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ])
  ).toBe(2);
});

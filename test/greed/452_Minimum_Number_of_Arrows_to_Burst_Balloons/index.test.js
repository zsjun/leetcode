import findMinArrowShots from "../../../src/greed/452_Minimum_Number_of_Arrows_to_Burst_Balloons/index2";

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
test("2", () => {
  expect(
    findMinArrowShots([
      [3, 9],
      [7, 12],
      [3, 8],
      [6, 8],
      [9, 10],
      [2, 9],
      [0, 9],
      [3, 9],
      [0, 6],
      [2, 8],
    ])
  ).toBe(2);
});

test("3", () => {
  expect(
    findMinArrowShots([
      [1, 9],
      [7, 16],
      [2, 5],
      [7, 12],
      [9, 11],
      [2, 10],
      [9, 16],
      [3, 9],
      [1, 3],
    ])
  ).toBe(2);
});

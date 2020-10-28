import getSkyline from "../../../src/top_interview/218_The_Skyline_Problem/index";

test("1", () => {
  expect(
    getSkyline([
      [2, 9, 10],
      [3, 7, 15],
      [5, 12, 12],
      [15, 20, 10],
      [19, 24, 8],
    ])
  ).toEqual([
    [2, 10],
    [3, 15],
    [7, 12],
    [12, 0],
    [15, 10],
    [20, 8],
    [24, 0],
  ]);
});

test("2", () => {
  expect(
    getSkyline([
      [1, 2, 1],
      [1, 2, 2],
      [1, 2, 3],
    ])
  ).toEqual([
    [1, 3],
    [2, 0],
  ]);
});
test("3", () => {
  expect(
    getSkyline([
      [2, 4, 7],
      [2, 4, 5],
      [2, 4, 6],
    ])
  ).toEqual([
    [2, 7],
    [4, 0],
  ]);
});

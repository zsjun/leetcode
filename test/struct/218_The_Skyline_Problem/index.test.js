import getSkyline from "../../../src/struct/218_The_Skyline_Problem/index1";

test("1", () => {
  expect(
    getSkyline([
      [0, 2, 3],
      [0, 1, 2],
    ])
  ).toEqual([
    [0, 3],
    [2, 0],
  ]);
});

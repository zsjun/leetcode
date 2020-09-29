import uniquePathsWithObstacles from "../../../src/dp/63_Unique_Paths_II/index";

test("1", () => {
  expect(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ])
  ).toBe(2);
});
test("2", () => {
  expect(uniquePathsWithObstacles([[0, 1]])).toBe(0);
});

test("3", () => {
  expect(uniquePathsWithObstacles([[0, 1]])).toBe(0);
});
test("4", () => {
  expect(
    uniquePathsWithObstacles([
      [1, 0],
      [0, 0],
    ])
  ).toBe(0);
});

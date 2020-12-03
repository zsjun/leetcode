import maxAreaOfIsland from "../../../src/deepAndBreadthSearch/695_Max_Area_of_Island/index";

test("1", () => {
  expect(
    maxAreaOfIsland([
      [0, 1],
      [1, 1],
    ])
  ).toBe(3);
});

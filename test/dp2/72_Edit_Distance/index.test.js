import minDistance from "../../../src/dp2/72_Edit_Distance/index";

test("1", () => {
  expect(minDistance("horse", "ros")).toBe(3);
});

[
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 2, 3],
  [3, 2, 3, 4],
  [4, 3, 4, 3],
  [5, 4, 5, 4],
];

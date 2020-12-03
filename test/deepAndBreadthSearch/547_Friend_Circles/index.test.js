import findCircleNum from "../../../src/deepAndBreadthSearch/547_Friend_Circles/index1";

test("1", () => {
  expect(
    findCircleNum([
      [1, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 1, 1, 1],
      [1, 0, 1, 1],
    ])
  ).toBe(1);
});

test("2", () => {
  expect(
    findCircleNum([
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ])
  ).toBe(2);
});

[
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];

import merge from "../../../src/sort/56_Merge_Intervals/index";

test("1", () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});

test("2", () => {
  expect(
    merge([
      [1, 4],
      [0, 1],
    ])
  ).toEqual([[0, 4]]);
});

test("3", () => {
  expect(
    merge([
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [1, 10],
    ])
  ).toEqual([[1, 10]]);
});

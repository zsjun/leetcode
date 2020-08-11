import insert from "../../../src/sort/57_Insert_Interval/index";

test("1", () => {
  expect(
    insert(
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5]
    )
  ).toEqual([
    [1, 5],
    [6, 9],
  ]);
});

[];

test("2", () => {
  expect(insert([], [5, 7])).toEqual([[5, 7]]);
});

test("3", () => {
  expect(insert([[1, 5]], [2, 7])).toEqual([[1, 7]]);
});

test("4", () => {
  expect(insert([[1, 5]], [0, 0])).toEqual([
    [0, 0],
    [1, 5],
  ]);
});
test("5", () => {
  expect(
    insert(
      [
        [2, 5],
        [6, 7],
        [8, 9],
      ],
      [0, 1]
    )
  ).toEqual([
    [0, 1],
    [2, 5],
    [6, 7],
    [8, 9],
  ]);
});

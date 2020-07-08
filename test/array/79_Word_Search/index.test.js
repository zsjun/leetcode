import exist from "../../../src/array/79_Word_Search/index1";

test("1", () => {
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCCED"
    )
  ).toEqual(true);
});

test("2", () => {
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "SEE"
    )
  ).toEqual(true);
});

test("3", () => {
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCB"
    )
  ).toEqual(false);
});
test("4", () => {
  expect(
    exist(
      [
        ["C", "A", "A"],
        ["A", "A", "A"],
        ["B", "C", "D"],
      ],
      "AAB"
    )
  ).toEqual(true);
});

test("5", () => {
  expect(
    exist(
      [
        ["a", "a", "a"],
        ["a", "b", "b"],
        ["a", "b", "b"],
        ["b", "b", "b"],
        ["b", "b", "b"],
        ["a", "a", "a"],
        ["b", "b", "b"],
        ["a", "b", "b"],
        ["a", "a", "b"],
        ["a", "b", "a"],
      ],
      "aabaaaabbb"
    )
  ).toEqual(false);
});

test("5", () => {
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "E", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCESEEEFS"
    )
  ).toEqual(true);
});

test("6", () => {
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCCED"
    )
  ).toEqual(true);
});

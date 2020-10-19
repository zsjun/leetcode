import maxPoints from "../../../src/top_interview/149_Max_Points_on_a_Line/index";

test("1", () => {
  expect(
    maxPoints([
      [1, 1],
      [2, 2],
      [3, 3],
    ])
  ).toBe(3);
});

test("2", () => {
  expect(
    maxPoints([
      [1, 1],
      [3, 2],
      [5, 3],
      [4, 1],
      [2, 3],
      [1, 4],
    ])
  ).toBe(4);
});

test("3", () => {
  expect(
    maxPoints([
      [4, 0],
      [4, -1],
      [4, 5],
    ])
  ).toBe(3);
});
test("4", () => {
  expect(
    maxPoints([
      [1, 1],
      [1, 1],
      [1, 1],
    ])
  ).toBe(3);
});

test("5", () => {
  expect(
    maxPoints([
      [1, 1],
      [1, 1],
      [2, 2],
      [2, 2],
    ])
  ).toBe(4);
});

test("6", () => {
  expect(
    maxPoints([
      [3, 1],
      [12, 3],
      [3, 1],
      [-6, -1],
    ])
  ).toBe(4);
});

test("7", () => {
  expect(
    maxPoints([
      [0, 0],
      [94911150, 94911151],
      [94911151, 94911152],
    ])
  ).toBe(2);
});

test("8", () => {
  expect(
    maxPoints([
      [1, 2],
      [2, 1],
      [2, 4],
      [1, 4],
      [3, 6],
    ])
  ).toBe(3);
});

test("9", () => {
  expect(
    maxPoints([
      [0, 0],
      [94911151, 94911150],
      [94911152, 94911151],
    ])
  ).toBe(2);
});

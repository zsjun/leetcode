import spiralOrder from "../../../src/top_interview/54_Spiral_Matrix/index";

test("1", () => {
  expect(
    spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ])
  ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});
test("2", () => {
  expect(
    spiralOrder([
      [2, 5],
      [8, 4],
      [0, -1],
    ])
  ).toEqual([2, 5, 4, -1, 0, 8]);
});

test("3", () => {
  expect(
    spiralOrder([
      [2, 3, 4],
      [5, 6, 7],
      [8, 9, 10],
      [11, 12, 13],
      [14, 15, 16],
    ])
  ).toEqual([2, 3, 4, 7, 10, 13, 16, 15, 14, 11, 8, 5, 6, 9, 12]);
});

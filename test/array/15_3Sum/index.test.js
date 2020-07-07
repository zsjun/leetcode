import get3sums from "../../../src/array/15_3Sum/index1";

test("1", () => {
  expect(get3sums([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
  expect(get3sums([-1, 0, 1])).toEqual([[-1, 0, 1]]);
  expect(get3sums([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])).toEqual([
    [-4, -2, 6],
    [-4, 0, 4],
    [-4, 1, 3],
    [-4, 2, 2],
    [-2, -2, 4],
    [-2, 0, 2],
  ]);
});

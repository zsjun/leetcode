import getMaxArea from "../../../src/array/84_Largest_Rectangle_in_Histogram/index";

test("1", () => {
  expect(getMaxArea([2, 1, 5, 6, 2, 3])).toBe(10);
});
test("2", () => {
  expect(getMaxArea([1, 1])).toBe(2);
});

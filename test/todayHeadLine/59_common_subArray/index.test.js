import getCommonSubArr from "../../../src/todayHeadLine/59_common_subArray/index";

test("1", () => {
  expect(getCommonSubArr([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
});

test("2", () => {
  expect(getCommonSubArr([1, 2, 3, 1], [2, 2, 4, 5, 3])).toEqual([2, 3]);
});

test("3", () => {
  expect(getCommonSubArr([], [2, 2, 4, 5, 3])).toEqual([]);
});

test("4", () => {
  expect(getCommonSubArr([1, 1], [1])).toEqual([1]);
});

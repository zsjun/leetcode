import maxSlidingWindow from "../../../src/struct/239_Sliding_Window_Maximum/index";

test("1", () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
});

test("2", () => {
  expect(maxSlidingWindow([1, -1], 1)).toEqual([1, -1]);
});

test("3", () => {
  expect(maxSlidingWindow([-7, -8, 7, 5, 7, 1, 6, 0], 4)).toEqual([7, 7, 7, 7, 7]);
});

test("4", () => {
  expect(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5)).toEqual([10, 10, 9, 2]);
});

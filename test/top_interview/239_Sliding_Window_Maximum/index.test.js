import maxSlidingWindow from "../../../src/top_interview/239_Sliding_Window_Maximum/index";

test("1", () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
});

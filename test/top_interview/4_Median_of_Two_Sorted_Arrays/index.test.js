import findMedianSortedArrays from "../../../src/top_interview/4_Median_of_Two_Sorted_Arrays/index";

test("1", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});

test("2", () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});

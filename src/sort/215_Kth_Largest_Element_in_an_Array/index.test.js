import findKthLargest from "../../../src/sort/215_Kth_Largest_Element_in_an_Array/index";

test("1", () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
});

test("2", () => {
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
});

test("3", () => {
  expect(findKthLargest([-1, 2, 0], 1)).toBe(2);
});

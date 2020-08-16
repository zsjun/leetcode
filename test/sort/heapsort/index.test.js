import heapSort from "../../../src/sort/heapsort/index";

test("1", () => {
  expect(heapSort([4, 6, 8, 5, 9])).toEqual([4, 5, 6, 8, 9]);
});

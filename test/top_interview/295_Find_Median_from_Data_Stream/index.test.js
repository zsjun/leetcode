import MedianFinder from "../../../src/top_interview/295_Find_Median_from_Data_Stream/index";

test("1", () => {
  const test1 = new MedianFinder();
  test1.addNum(-1);
  // test1.addNum(-2);
  // test1.addNum(-3);
  expect(test1.findMedian()).toBe(1);
});

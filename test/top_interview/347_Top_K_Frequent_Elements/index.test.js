import topKFrequent from "../../../src/top_interview/347_Top_K_Frequent_Elements/index";

test("1", () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
});

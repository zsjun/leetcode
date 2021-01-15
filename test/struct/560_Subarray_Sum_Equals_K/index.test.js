import subarraySum from "../../../src/struct/560_Subarray_Sum_Equals_K/index1";

test("1", () => {
  expect(subarraySum([-1, -1, 1], 0)).toBe(1);
});

test("2", () => {
  expect(subarraySum([1, 1, 1], 2)).toBe(2);
});

test("3", () => {
  expect(subarraySum([1], 0)).toBe(0);
});

import maxSubArray from "../../../src/dp/53_Maximum_Subarray/index";

test("1", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

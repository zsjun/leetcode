import gcd from "../../../src/top_interview/gcd/index2";

test("1", () => {
  expect(gcd(12, 18)).toBe(6);
});
test("2", () => {
  expect(gcd(1, 0)).toBe(1);
});
test("3", () => {
  expect(gcd(3, 5)).toBe(1);
});

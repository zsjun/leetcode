import trailingZeroes from "../../../src/math/172_Factorial_Trailing_Zeroes/index";

test("1", () => {
  expect(trailingZeroes(5)).toBe(1);
});
test("2", () => {
  expect(trailingZeroes(3)).toBe(0);
});
test("3", () => {
  expect(trailingZeroes(2)).toBe(0);
});

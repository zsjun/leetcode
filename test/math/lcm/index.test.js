import lcm from "../../../src/math/lcm/index";

test("1", () => {
  expect(lcm(4, 6)).toBe(2);
});

test("2", () => {
  expect(lcm(3, 9)).toBe(3);
});

test("3", () => {
  expect(lcm(4, 10)).toBe(2);
});

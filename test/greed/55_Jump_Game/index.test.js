import jump from "../../../src/greed/55_Jump_Game/index";

test("1", () => {
  expect(jump([2, 3, 1, 1, 4])).toBe(true);
});

test("2", () => {
  expect(jump([1, 1, 0, 1])).toBe(false);
});

test("3", () => {
  expect(jump([0])).toBe(true);
});
test("4", () => {
  expect(jump([1, 1, 1, 0])).toBe(true);
});

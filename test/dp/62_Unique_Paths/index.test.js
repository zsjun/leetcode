import uniquePaths from "../../../src/dp/62_Unique_Paths/index";

test("1", () => {
  expect(uniquePaths(3, 7)).toBe(28);
});
test("2", () => {
  expect(uniquePaths(1, 2)).toBe(1);
});

test("3", () => {
  expect(uniquePaths(1, 1)).toBe(1);
});

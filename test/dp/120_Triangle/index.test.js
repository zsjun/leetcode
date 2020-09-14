import minimumTotal from "../../../src/dp/120_Triangle/index";

test("1", () => {
  expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
});

test("2", () => {
  expect(minimumTotal([[-1], [3, 2], [-3, 1, -1]])).toBe(-1);
});

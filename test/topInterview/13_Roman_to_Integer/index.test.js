import romanToInt from "../../../src/topInterview/13_Roman_to_Integer/index";

test("1", () => {
  expect(romanToInt("IV")).toBe(4);
});

test("2", () => {
  expect(romanToInt("MCDLXXVI")).toBe(1476);
});

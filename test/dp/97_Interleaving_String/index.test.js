import isInterleave from "../../../src/dp/97_Interleaving_String/index";

test("1", () => {
  expect(isInterleave("aabcc", "dbbca", "aadbbcbcac")).toBe(true);
});

test("2", () => {
  expect(isInterleave("", "", "a")).toBe(false);
});
test("3", () => {
  expect(isInterleave("a", "", "a")).toBe(true);
});
test("4", () => {
  expect(isInterleave("aacaac", "aacaaeaac", "aacaaeaaeaacaac")).toBe(false);
});

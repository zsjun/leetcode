import isMatch from "../../../src/dp2/10_Regular_Expression_Matching/index";

test("1", () => {
  expect(isMatch("aa", "a*")).toBe(true);
});

test("3", () => {
  expect(isMatch("ab", ".*")).toBe(true);
});

test("2", () => {
  expect(isMatch("aa", "a")).toBe(false);
});
test("5", () => {
  expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
});
test("6", () => {
  expect(isMatch("aaa", "ab*ac*a")).toBe(true);
});
test("4", () => {
  expect(isMatch("aab", "c*a*b")).toBe(true);
});
test("7", () => {
  expect(isMatch("a", "ab*a")).toBe(false);
});

test("8", () => {
  expect(isMatch("ab", ".*..")).toBe(true);
});
[
  [true, false],
  [true, true],
  [false, true],
  [false, false],
];

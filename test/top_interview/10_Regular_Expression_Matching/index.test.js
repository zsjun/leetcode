import isMatch from "../../../src/top_interview/10_Regular_Expression_Matching/index";

// test("1", () => {
//   expect(isMatch("ab", ".*")).toBe(true);
// });

// test("2", () => {
//   expect(isMatch("aa", "a*")).toBe(true);
// });
test("3", () => {
  expect(isMatch("", "c*c*")).toBe(true);
});
test("4", () => {
  expect(isMatch("", "*")).toBe(false);
});

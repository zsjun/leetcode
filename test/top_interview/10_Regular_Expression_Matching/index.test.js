import isMatch from "../../../src/top_interview/10_Regular_Expression_Matching/index";

test("1", () => {
  expect(isMatch("ab", ".*")).toBe(true);
});

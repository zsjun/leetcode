import generateParenthesis from "../../../src/top_interview/22_Generate_Parentheses/index";

test("1", () => {
  expect(generateParenthesis(2)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
});

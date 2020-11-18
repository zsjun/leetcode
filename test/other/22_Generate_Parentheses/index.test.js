import generateParenthesis from "../../../src/other/22_Generate_Parentheses/index";

test("1", () => {
  expect(generateParenthesis(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
});

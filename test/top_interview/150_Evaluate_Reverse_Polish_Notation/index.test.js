import evalRPN from "../../../src/top_interview/150_Evaluate_Reverse_Polish_Notation/index";

test("1", () => {
  expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
});

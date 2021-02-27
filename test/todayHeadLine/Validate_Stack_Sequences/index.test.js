import validateStackSequences from "../../../src/todayHeadLine/Validate_Stack_Sequences/index";

test("1", () => {
  expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBe(false);
});

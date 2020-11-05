import letterCombinations from "../../../src/top_interview/17_Letter_Combinations_of_a_Phone_Number/index";

test("1", () => {
  expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
});

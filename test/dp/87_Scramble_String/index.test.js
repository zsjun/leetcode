import isScramble from "../../../src/dp/87_Scramble_String/index";

test("1", () => {
  expect(isScramble("abcd", "bdac")).toBe(false);
});

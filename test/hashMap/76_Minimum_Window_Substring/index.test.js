import minWindow from "../../../src/hashMap/76_Minimum_Window_Substring/index";

test("1", () => {
  expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
});
test("2", () => {
  expect(minWindow("ab", "a")).toBe("a");
});

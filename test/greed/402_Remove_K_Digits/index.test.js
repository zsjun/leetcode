import removeKdigits from "../../../src/greed/402_Remove_K_Digits/index1";

test("1", () => {
  expect(removeKdigits("1432219", 3)).toBe("1219");
});

test("2", () => {
  expect(removeKdigits("10200", 1)).toBe("200");
});
test("3", () => {
  expect(removeKdigits("10", 2)).toBe("0");
});
test("4", () => {
  expect(removeKdigits("10", 1)).toBe("0");
});
test("5", () => {
  expect(removeKdigits("112", 1)).toBe("11");
});
test("6", () => {
  expect(removeKdigits("1111111", 3)).toBe("1111");
});

test("7", () => {
  expect(removeKdigits("1173", 2)).toBe("11");
});

import convertToTitle from "../../../src/math/168_Excel_Sheet_Column_Title/index3";

test("1", () => {
  expect(convertToTitle(27)).toBe("AA");
});

test("2", () => {
  expect(convertToTitle(703)).toBe("AAA");
});
test("3", () => {
  expect(convertToTitle(52)).toBe("AZ");
});
test("4", () => {
  expect(convertToTitle(702)).toBe("ZZ");
});

test("5", () => {
  expect(convertToTitle(2)).toBe("B");
});

import numDecodings from "../../../src/dp2/91_Decode_Ways/index1";

test("1", () => {
  expect(numDecodings("12")).toBe(2);
});

test("2", () => {
  expect(numDecodings("226")).toBe(3);
});

test("3", () => {
  expect(numDecodings("00")).toBe(0);
});
test("4", () => {
  expect(numDecodings("2101")).toBe(1);
});

test("5", () => {
  expect(numDecodings("27")).toBe(1);
});

test("6", () => {
  expect(numDecodings("1201234")).toBe(3);
});

test("7", () => {
  expect(numDecodings("10011")).toBe(0);
});

test("8", () => {
  expect(numDecodings("123123")).toBe(9);
});

test("9", () => {
  expect(numDecodings("230")).toBe(0);
});

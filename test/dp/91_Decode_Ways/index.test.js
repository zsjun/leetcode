import numDecodings from "../../../src/dp/91_Decode_Ways/index";

test("1", () => {
  expect(numDecodings("0")).toBe(0);
});

test("2", () => {
  expect(numDecodings("27")).toBe(1);
});

test("3", () => {
  expect(numDecodings("226")).toBe(3);
});
test("4", () => {
  expect(numDecodings("00")).toBe(0);
});
test("5", () => {
  expect(numDecodings("0000")).toBe(0);
});

test("6", () => {
  expect(numDecodings("01")).toBe(0);
});
test("7", () => {
  expect(numDecodings("100")).toBe(0);
});
test("8", () => {
  expect(numDecodings("1010")).toBe(1);
});

test("9", () => {
  expect(numDecodings("101")).toBe(1);
});
test("10", () => {
  expect(numDecodings("227")).toBe(2);
});
test("11", () => {
  expect(numDecodings("27")).toBe(1);
});

test("12", () => {
  expect(numDecodings("302")).toBe(0);
});
test("13", () => {
  expect(numDecodings("611")).toBe(2);
});
test("14", () => {
  expect(numDecodings("7206")).toBe(1);
});

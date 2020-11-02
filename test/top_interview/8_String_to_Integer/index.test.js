import myAtoi from "../../../src/top_interview/8_String_to_Integer/index";

test("1", () => {
  expect(myAtoi("   -42")).toBe(-42);
});

test("2", () => {
  expect(myAtoi("4193 with words")).toBe(4193);
});

test("3", () => {
  expect(myAtoi("-91283472332")).toBe(-2147483648);
});
test("4", () => {
  expect(myAtoi("words and 987")).toBe(0);
});

test("5", () => {
  expect(myAtoi("3.1223322")).toBe(3);
});

test("6", () => {
  expect(myAtoi("+-12")).toBe(0);
});

import largestNumber from "../../../src/sort/179_Largest_Number/index1";

test("1", () => {
  expect(largestNumber([10, 2])).toBe("210");
});

test("2", () => {
  expect(largestNumber([3, 30, 34, 5, 9])).toBe("9534330");
});

test("3", () => {
  expect(largestNumber([1, 20])).toBe("201");
});
test("4", () => {
  expect(largestNumber([20, 1])).toBe("201");
});
test("5", () => {
  expect(largestNumber([321, 123])).toBe("321123");
});

test("6", () => {
  expect(largestNumber([1, 2, 30])).toBe("3021");
});
test("7", () => {
  expect(largestNumber([121, 12])).toBe("12121");
});

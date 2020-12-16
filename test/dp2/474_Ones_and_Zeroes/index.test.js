import findMaxForm from "../../../src/dp2/474_Ones_and_Zeroes/index";

test("1", () => {
  expect(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)).toBe(4);
});

test("2", () => {
  expect(findMaxForm(["10", "0", "1"], 1, 1)).toBe(2);
});

test("3", () => {
  expect(findMaxForm(["111", "1000", "1000", "1000"], 9, 3)).toBe(3);
});

test("4", () => {
  expect(findMaxForm(["011111", "001", "001"], 4, 5)).toBe(2);
});

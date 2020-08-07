import search from "../../../src/binarySearch/33_Search_in_Rotated_Sorted_Array/index";

test("1", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});

test("2", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});

test("3", () => {
  expect(search([1, 3, 5], 1)).toBe(0);
});
test("4", () => {
  expect(search([1, 3], 3)).toBe(1);
});
test("5", () => {
  expect(search([3, 1], 1)).toBe(1);
});

test("5", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0);
});

test("6", () => {
  expect(search([4, 5, 6, 7, 8, 9, 1, 2, 3], 1)).toBe(6);
});

test("7", () => {
  expect(search([5, 1, 3], 5)).toBe(0);
});

test("8", () => {
  expect(search([6, 7, 1, 2, 3, 4, 5], 6)).toBe(0);
});

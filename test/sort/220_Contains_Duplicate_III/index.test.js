import containsNearbyAlmostDuplicate from "../../../src/sort/220_Contains_Duplicate_III/index";

test("1", () => {
  expect(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)).toBe(true);
});
test("2", () => {
  expect(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)).toBe(true);
});
test("3", () => {
  expect(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)).toBe(false);
});

test("4", () => {
  expect(containsNearbyAlmostDuplicate([-1, -1], 1, -1)).toBe(false);
});
test("5", () => {
  expect(containsNearbyAlmostDuplicate([2, 2], 3, 0)).toBe(true);
});

import minDistance from "../../../src/dp2/583_Delete_Operation_for_Two_Strings/index";

test("1", () => {
  expect(minDistance("a", "b")).toBe(2);
});

test("2", () => {
  expect(minDistance("sea", "eat")).toBe(2);
});

test("3", () => {
  expect(minDistance("sea", "ate")).toBe(4);
});

import findContentChildren from "../../../src/greed/455_Assign_Cookies/index";

test("1", () => {
  expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1);
});

test("2", () => {
  expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2);
});

import getKstr from "../../../src/twoPoints/340_Longest_Substring_with_At_Most_K_Distinct_Characters/index";

test("1", () => {
  expect(getKstr("eceba", 2)).toBe(3);
});

test("2", () => {
  expect(getKstr("aa", 1)).toBe(2);
});

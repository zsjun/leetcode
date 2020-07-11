import jump from "../../../src/array/45_Jump_Game_II/index";

test("1", () => {
  expect(jump([2, 3, 1, 1, 4])).toBe(2);
});
test("1", () => {
  expect(jump([2, 3, 0, 1, 4])).toBe(2);
});

import jump from "../../../src/greed/45_Jump_Game_II/index1";

test("1", () => {
  expect(jump([1, 1, 1, 1])).toBe(3);
});

test("2", () => {
  expect(jump([2, 3, 1, 1, 4])).toBe(2);
});

test("3", () => {
  expect(jump([1, 2])).toBe(1);
});

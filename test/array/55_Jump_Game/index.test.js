import canJump from "../../../src/array/55_Jump_Game/index";

test("1", () => {
  expect(canJump([2, 3, 1, 1, 4])).toBe(true);
});
test("2", () => {
  expect(canJump([3, 2, 1, 0, 4])).toBe(false);
});

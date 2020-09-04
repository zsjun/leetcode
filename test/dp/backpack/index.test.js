import getBigPack from "../../../src/dp/backpack/index";

test("1", () => {
  expect(getBigPack(5, 8, [3, 5, 1, 2, 2], [4, 5, 2, 1, 3])).toBe(10);
});

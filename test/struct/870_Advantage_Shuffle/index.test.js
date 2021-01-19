import advantageCount from "../../../src/struct/870_Advantage_Shuffle/index";

test("1", () => {
  expect(advantageCount([12, 24, 8, 32], [13, 25, 32, 11])).toEqual([24, 32, 8, 12]);
});

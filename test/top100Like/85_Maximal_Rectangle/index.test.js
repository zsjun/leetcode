import fn from "../../../src/top100Like/85_Maximal_Rectangle/index1";

[0, 1, 1, 3, 4][(0, 1, 0, 3, 0)];

test("1", () => {
  expect(
    fn([
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"],
    ])
  ).toBe(6);
});

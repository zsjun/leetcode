import integerBreak from "../../../src/everyday/433_Minimum_Genetic_Mutation/index";

test("1", () => {
  expect(integerBreak("AACCGGTT", "AACCGGTA", ["AACCGGTA"])).toBe(1);
});

test("2", () => {
  expect(
    integerBreak("AAAAAAAA", "CCCCCCCC", [
      "AAAAAAAA",
      "AAAAAAAC",
      "AAAAAACC",
      "AAAAACCC",
      "AAAACCCC",
      "AACACCCC",
      "ACCACCCC",
      "ACCCCCCC",
      "CCCCCCCA",
      "CCCCCCCC",
    ])
  ).toBe(8);
});

import numPermsDISequence from "../../../src/dp/903_Valid_Permutations_for_DI_Sequence/index";

test("1", () => {
  expect(numPermsDISequence("IDDDIIDIIIIIIIIDIDID")).toBe(853197538);
});

import findRepeatedDnaSequences from "../../../src/hashMap/187_Repeated_DNA_Sequences/index";

test("1", () => {
  expect(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")).toEqual(["AAAAACCCCC", "CCCCCAAAAA"]);
});

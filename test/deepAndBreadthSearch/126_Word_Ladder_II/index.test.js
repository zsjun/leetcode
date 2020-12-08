import findLadders from "../../../src/deepAndBreadthSearch/126_Word_Ladder_II/index";

test("1", () => {
  expect(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])).toEqual([
    ["hit", "hot", "dot", "dog", "cog"],
    ["hit", "hot", "lot", "log", "cog"],
  ]);
});

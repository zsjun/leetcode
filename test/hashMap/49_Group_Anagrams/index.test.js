import groupAnagrams from "../../../src/hashMap/49_Group_Anagrams/index";

test("1", () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);
});

import Trie from "../../../src/trie/211_Add_and_Search_Word_-_Data_structure_design/index";

test("1", () => {
  const trie = new Trie();
  trie.addWord("at");
  trie.addWord("and");
  trie.addWord("an");
  trie.addWord("add");
  trie.addWord("bat");
  // trie.search(".ad");
  // trie.search("b..");
  expect(trie.search(".")).toBe(false);
});

[
  "WordDictionary",
  "addWord",
  "addWord",
  "addWord",
  "addWord",
  "search",
  "search",
  "addWord",
  "search",
  "search",
  "search",
  "search",
  "search",
  "search",
][([], ["at"], ["and"], ["an"], ["add"], ["a"], [".at"], ["bat"], [".at"], ["an."], ["a.d."], ["b."], ["a.d"], ["."])];

import Trie from "../../../src/trie/208_Implement_Trie/index";

test("1", () => {
  const trie = new Trie();
  trie.insert("app");
  trie.insert("apple");
  trie.insert("beer");
  trie.insert("add");
  trie.insert("jam");
  trie.insert("rental");
  expect(trie.search("apps")).toBe(false);
});

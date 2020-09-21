import wordBreak from "../../../src/dp/140_Word_Break_II/index.js";

test("1", () => {
  expect(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])).toEqual(["cats and dog", "cat sand dog"]);
});

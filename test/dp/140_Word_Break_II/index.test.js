import wordBreak from "../../../src/dp/140_Word_Break_II/index3.js";

test("1", () => {
  expect(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])).toEqual(["cat sand dog", "cats and dog"]);
});

// test("2", () => {
//   expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toEqual([]);
// });

// test("3", () => {
//   expect(wordBreak("aaaaaaa", ["aaaa", "aaa"])).toEqual(["aaa aaaa", "aaaa aaa"]);
// });

// test("4", () => {
//   expect(wordBreak("aaaaaaa", ["aaaa", "aa"])).toEqual([]);
// });
// test("6", () => {
//   expect(wordBreak("ccbb", ["bc", "cb"])).toEqual([]);
// });
// test("5", () => {
//   expect(
//     wordBreak(
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
//     )
//   ).toEqual([]);
// });

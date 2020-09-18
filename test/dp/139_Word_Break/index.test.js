import wordBreak from "../../../src/dp/139_Word_Break/index";

test("1", () => {
  expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
});

test("2", () => {
  expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
});

test("3", () => {
  expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
});

test("4", () => {
  expect(wordBreak("bb", ["a", "b", "bbb", "bbbb"])).toBe(true);
});

test("5", () => {
  expect(wordBreak("cbca", ["bc", "ca"])).toBe(false);
});

test("6", () => {
  expect(wordBreak("aaaaaaa", ["aaaa", "aaa"])).toBe(true);
});

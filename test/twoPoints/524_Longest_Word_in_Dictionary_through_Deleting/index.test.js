import findLongestWord from "../../../src/twoPoints/524_Longest_Word_in_Dictionary_through_Deleting/index1";

test("1", () => {
  expect(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])).toBe("apple");
});

test("2", () => {
  expect(
    findLongestWord("aewfafwafjlwajflwajflwafj", ["apple", "ewaf", "awefawfwaf", "awef", "awefe", "ewafeffewafewf"])
  ).toBe("ewaf");
});

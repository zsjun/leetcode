import findLongestChain from "../../../src/dp2/646_Maximum_Length_of_Pair_Chain/index";

test("1", () => {
  expect(
    findLongestChain([
      [1, 2],
      [2, 3],
      [3, 4],
    ])
  ).toBe(2);
});

test("1", () => {
  expect(
    findLongestChain([
      [-6, 9],
      [1, 6],
      [8, 10],
      [-1, 4],
      [-6, -2],
      [-9, 8],
      [-5, 3],
      [0, 3],
    ])
  ).toBe(3);
});

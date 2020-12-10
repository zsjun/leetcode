import permuteUnique from "../../../src/deepAndBreadthSearch/47_Permutations_II/index";

// test("1", () => {
//   expect(permuteUnique([1, 1, 2])).toEqual([
//     [1, 1, 2],
//     [1, 2, 1],
//     [2, 1, 1],
//   ]);
// });

// test("2", () => {
//   expect(permuteUnique([1, 2, 3])).toEqual([
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 2, 1],
//     [3, 1, 2],
//   ]);
// });

// test("1", () => {
//   expect(permuteUnique([2, 2, 1, 1])).toEqual([
//     [1, 1, 2, 2],
//     [1, 2, 1, 2],
//     [1, 2, 2, 1],
//     [2, 1, 1, 2],
//     [2, 1, 2, 1],
//     [2, 2, 1, 1],
//   ]);
// });

test("1", () => {
  expect(permuteUnique([1, 2, 2])).toEqual([
    [1, 2, 2],
    [2, 1, 2],
    [2, 2, 1],
  ]);
});

test("2", () => {
  expect(permuteUnique([2, 2])).toEqual([[2, 2]]);
});

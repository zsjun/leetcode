import reachableNodes from "../../../src/map/882_Reachable_Nodes_In_Subdivided_Graph/index";

[
  [-1, 4, 7, 8, 7],
  [4, -1, 0, 9, 4],
  [7, 0, -1, 1, 3],
  [8, 9, 1, -1, 9],
  [7, 4, 3, 9, -1],
];
test("1", () => {
  expect(
    reachableNodes(
      [
        [0, 3, 8],
        [0, 1, 4],
        [2, 4, 3],
        [1, 2, 0],
        [1, 3, 9],
        [0, 4, 7],
        [3, 4, 9],
        [1, 4, 4],
        [0, 2, 7],
        [2, 3, 1],
      ],
      8,
      5
    )
  ).toBe(40);
});

// test("2", () => {
//   expect(
//     reachableNodes(
//       [
//         [0, 1, 10],
//         [0, 2, 1],
//         [1, 2, 2],
//       ],
//       6,
//       3
//     )
//   ).toBe(13);
// });

// test("3", () => {
//   expect(
//     reachableNodes(
//       [
//         [0, 1, 4],
//         [1, 2, 6],
//         [0, 2, 8],
//         [1, 3, 1],
//       ],
//       10,
//       4
//     )
//   ).toBe(23);
// });

// test("4", () => {
//   expect(
//     reachableNodes(
//       [
//         [1, 2, 4],
//         [1, 4, 5],
//         [1, 3, 1],
//         [2, 3, 4],
//         [3, 4, 5],
//       ],
//       17,
//       5
//     )
//   ).toBe(1);
// });

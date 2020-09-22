import videoStitching from "../../../src/dp/1024_Video_Stitching/index";

// test("1", () => {
//   expect(
//     videoStitching(
//       [
//         [0, 2],
//         [4, 6],
//         [8, 10],
//         [1, 9],
//         [1, 5],
//         [5, 9],
//       ],
//       10
//     )
//   ).toBe(3);
// });

test("2", () => {
  expect(
    videoStitching(
      [
        [0, 1],
        [6, 8],
        [0, 2],
        [5, 6],
        [0, 4],
        [0, 3],
        [6, 7],
        [1, 3],
        [4, 7],
        [1, 4],
        [2, 5],
        [2, 6],
        [3, 4],
        [4, 5],
        [5, 7],
        [6, 9],
      ],
      9
    )
  ).toBe(3);
});

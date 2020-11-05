import kthSmallest from "../../../src/top_interview/378_Kth_Smallest_Element_in_a_Sorted_Matrix/index";

test("1", () => {
  expect(
    kthSmallest(
      [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15],
      ],
      8
    )
  ).toBe(13);
});
// test("2", () => {
//   expect(
//     kthSmallest(
//       [
//         [1, 2],
//         [1, 3],
//       ],
//       2
//     )
//   ).toBe(1);
// });

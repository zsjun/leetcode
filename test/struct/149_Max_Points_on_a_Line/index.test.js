import maxPoints from "../../../src/struct/149_Max_Points_on_a_Line/index";
// import maxPoints from "../../../src/top_interview/149_Max_Points_on_a_Line/index";

// test("1", () => {
//   expect(
//     maxPoints([
//       [0, 0],
//       [94911150, 94911151],
//       [94911151, 94911152],
//     ])
//   ).toBe(2);
// });

// test("2", () => {
//   expect(
//     maxPoints([
//       [0, 0],
//       [94911151, 94911150],
//       [94911152, 94911151],
//     ])
//   ).toBe(2);
// });
// test("3", () => {
//   expect(
//     maxPoints([
//       [1, 1],
//       [2, 2],
//       [3, 3],
//     ])
//   ).toBe(3);
// });

test("4", () => {
  expect(
    maxPoints([
      [1, 1],
      [1, 1],
      [2, 2],
      [2, 2],
    ])
  ).toBe(4);
});

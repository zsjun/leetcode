import nextGreaterElements from "../../../src/struct/503_Next_Greater_Element_II/index1";

test("1", () => {
  expect(nextGreaterElements([1, 2, 3, 4, 5, 6, 5, 4, 5, 1, 2, 3])).toEqual([2, 3, 4, 5, 6, -1, 6, 5, 6, 2, 3, 4]);
});

// test("2", () => {
//   expect(nextGreaterElements([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, -1]);
// });

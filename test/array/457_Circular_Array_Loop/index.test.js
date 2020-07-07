import circularArrayLoop from "../../../src/array/457_Circular_Array_Loop/index";

test("1", () => {
  expect(circularArrayLoop([2, -1, 1, 2, 2])).toBe(true);
});
test("1", () => {
  expect(circularArrayLoop([-1, 2])).toBe(false);
});
test("1", () => {
  expect(circularArrayLoop([-2, 1, -1, -2, -2])).toBe(false);
});
// test("1", () => {
//   expect(circularArrayLoop([2, -1, 1, 2, 2])).toBe(true);
// });

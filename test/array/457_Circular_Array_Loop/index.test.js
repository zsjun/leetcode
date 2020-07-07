import circularArrayLoop from "../../../src/array/457_Circular_Array_Loop/index";

test("1", () => {
  expect(circularArrayLoop([2, -1, 1, 2, 2])).toBe(true);
});
test("2", () => {
  expect(circularArrayLoop([-1, 2])).toBe(false);
});
test("3", () => {
  expect(circularArrayLoop([-2, 1, -1, -2, -2])).toBe(false);
});
test("4", () => {
  expect(circularArrayLoop([-1, 2, 1, 2])).toBe(true);
});

test("5", () => {
  expect(circularArrayLoop([1, 1, 1, 1, 1, 1, 1, 1, 1, -5])).toBe(false);
});

test("6", () => {
  expect(circularArrayLoop([-2, -17, -1, -2, -2])).toBe(true);
});

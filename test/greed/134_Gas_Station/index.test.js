import canCompleteCircuit from "../../../src/greed/134_Gas_Station/index";

test("1", () => {
  expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
});

test("2", () => {
  expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
});

test("3", () => {
  expect(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6])).toBe(3);
});

[5, 8, 2, 8][(6, 5, 6, 6)];

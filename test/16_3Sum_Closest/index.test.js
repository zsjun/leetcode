import threeSumClosest from "../../src/16_3Sum_Closest/index";

test("1", () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
});

test("1", () => {
  expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
});

import getMax from "../../../src/everyday/1235_Maximum_Profit_in_Job_Scheduling/index1";

test("1", () => {
  expect(getMax([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])).toBe(120);
});

import dailyTemperatures from "../../../src/struct/739_Daily_Temperatures/index";

test("1", () => {
  expect(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70])).toEqual([8, 1, 5, 4, 3, 2, 1, 1, 0, 0]);
});

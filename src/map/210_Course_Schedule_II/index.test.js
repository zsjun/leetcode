import findOrder from "../../../src/map/210_Course_Schedule_II/index";

test("1", () => {
  expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
});

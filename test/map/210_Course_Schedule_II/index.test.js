import findOrder from "../../../src/map/210_Course_Schedule_II/index";

test("1", () => {
  expect(
    findOrder(3, [
      [0, 1],
      [0, 2],
      [1, 2],
    ])
  ).toEqual([2, 1, 0]);
});

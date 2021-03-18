import getMaxPosition from "../../../src/todayHeadLine/12_stack/index";

test("1", () => {
  expect(getMaxPosition([1, 3, 2, 5, 4, 6, 7, 10])).toEqual([1, 3, 3, 5, 5, 6, 7, -1]);
});

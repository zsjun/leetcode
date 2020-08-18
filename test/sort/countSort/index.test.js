import countArr from "../../../src/sort/countSort/index";

test("1", () => {
  expect(countArr([2, 5, 3, 0, 2, 3, 0, 3])).toEqual([0, 0, 2, 2, 3, 3, 3, 5]);
});

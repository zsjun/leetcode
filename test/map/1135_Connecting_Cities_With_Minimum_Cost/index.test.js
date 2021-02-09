import find from "../../../src/map/1135_Connecting_Cities_With_Minimum_Cost/index2";

test("1", () => {
  expect(
    find(3, [
      [1, 2, 5],
      [1, 3, 6],
      [2, 3, 1],
    ])
  ).toBe(6);
});

test("2", () => {
  expect(
    find(4, [
      [1, 2, 3],
      [3, 4, 4],
    ])
  ).toBe(-1);
});

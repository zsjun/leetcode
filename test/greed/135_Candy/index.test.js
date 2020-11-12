import candy from "../../../src/greed/135_Candy/index1";

test("1", () => {
  expect(candy([1, 2, 2])).toBe(4);
});

test("2", () => {
  expect(candy([1, 2, 87, 87, 87, 2, 1])).toBe(13);
});
// 1 2 2 1 1

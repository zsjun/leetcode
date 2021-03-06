import coinChange from "../../../src/dp2/322_Coin_Change/index";

test("1", () => {
  expect(coinChange([1, 2, 5], 11)).toBe(3);
});

test("2", () => {
  expect(coinChange([1, 2], 2)).toBe(1);
});
test("3", () => {
  expect(coinChange([186, 419, 83, 408], 6249)).toBe(20);
});
test("4", () => {
  expect(coinChange([1], 0)).toBe(0);
});

import maxProfit from "../../../src/greed/122_Best_Time_to_Buy_and_Sell_Stock_II/index1";

test("1", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
});

test("2", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});

test("3", () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
});

test("4", () => {
  expect(maxProfit([1, 7, 4, 2])).toBe(6);
});

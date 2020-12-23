import maxCoins from "../../../src/divideAndConquer/312_Burst_Balloons/index2";

test("1", () => {
  expect(maxCoins([3, 1, 5, 8])).toBe(167);
});

[
  [0, 0, 3, 15, 40, 8],
  [0, 0, 0, 15, 120, 24],
  [0, 0, 0, 0, 40, 8],
  [0, 0, 0, 0, 0, 40],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
// test("2", () => {
//   expect(maxCoins([9, 76, 64, 21, 97, 60])).toBe(1086136);
// });

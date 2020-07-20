import calculateMinimumHP from "../../../src/dp/174_Dungeon_Game/index";

test("1", () => {
  expect(
    calculateMinimumHP([
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
    ])
  ).toBe(7);
});

test("2", () => {
  expect(calculateMinimumHP([[-3], [5]])).toBe(4);
});

test("3", () => {
  expect(calculateMinimumHP([[2, 0, -1]])).toBe(1);
});
test("4", () => {
  expect(
    calculateMinimumHP([
      [
        5,
        23,
        -48,
        -21,
        -72,
        -62,
        -19,
        -55,
        -3,
        -93,
        -84,
        14,
        -34,
        46,
        -82,
        -46,
        39,
        26,
        47,
        -71,
        -46,
        -3,
        -59,
        -93,
        -13,
        -72,
        19,
        -43,
        -51,
        -2,
        -6,
        -53,
        12,
        -40,
        15,
        -94,
        37,
        -3,
        -32,
        -97,
      ],
    ])
  ).toBe(1115);
});

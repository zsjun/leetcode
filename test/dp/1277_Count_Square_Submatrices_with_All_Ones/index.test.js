import countSquares from "../../../src/dp/1277_Count_Square_Submatrices_with_All_Ones/index.js";

test("1", () => {
  expect(
    countSquares([
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 1],
    ])
  ).toBe(15);
});

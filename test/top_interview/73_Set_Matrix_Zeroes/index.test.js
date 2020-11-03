import setZeroes from "../../../src/top_interview/73_Set_Matrix_Zeroes/index";

test("1", () => {
  expect(
    setZeroes([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])
  ).toBe(1);
});

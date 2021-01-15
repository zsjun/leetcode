import matrixReshape from "../../../src/struct/566_Reshape_the_Matrix/index";

test("1", () => {
  expect(matrixReshape([[1, 2, 3, 4]], 2, 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

import diffWaysToCompute from "../../../src/divideAndConquer/241_Different_Ways_to_Add_Parentheses/index2";

// test("1", () => {
//   expect(diffWaysToCompute("2*3-4*5")).toEqual([-34, -14, -10, -10, 10]);
// });

test("1", () => {
  expect(diffWaysToCompute("2-1-1")).toEqual([2, 0]);
});
test("2", () => {
  expect(diffWaysToCompute("11")).toEqual([11]);
});

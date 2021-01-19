import nthSuperUglyNumber from "../../../src/struct/313_Super_Ugly_Number/index";

// test("1", () => {
//   expect(nthSuperUglyNumber(12, [2, 7, 13, 19])).toBe(32);
// });
test("2", () => {
  expect(nthSuperUglyNumber(15, [3, 5, 7, 11, 19, 23, 29, 41, 43, 47])).toBe(35);
});

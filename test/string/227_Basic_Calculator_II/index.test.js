import calculate from "../../../src/string/227_Basic_Calculator_II/index";

// test("1", () => {
//   expect(calculate("3+2*2")).toBe(7);
// });

// test("2", () => {
//   expect(calculate(" 3+5 / 2 ")).toBe(5);
// });

// test("3", () => {
//   expect(calculate(" 3/2 ")).toBe(1);
// });

test("4", () => {
  expect(calculate("14-3/2")).toBe(13);
});

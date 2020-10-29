import calculate from "../../../src/top_interview/227_Basic_Calculator_II/index";

test("1", () => {
  expect(calculate(" 3/2 ")).toBe(1);
});

test("2", () => {
  expect(calculate("3+2*2")).toBe(7);
});
test("3", () => {
  expect(calculate("14-3/2")).toBe(13);
});

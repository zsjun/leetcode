import calculate from "../../../src/string/772_Basic_Calculator_III/index1";

// " 6-4 / 2 " = 4;
// "2*(5+5*2)/3+(6/2+8)" = 21;
// "(2+6* 3+5- (3*14/7+2)*5)+3" = -12;
test("1", () => {
  expect(calculate("1 + 1")).toBe(2);
});

test("2", () => {
  expect(calculate(" 6-4 / 2 ")).toBe(4);
});

test("3", () => {
  expect(calculate("2*(5+5*2)/3+(6/2+8)")).toBe(21);
});

test("4", () => {
  expect(calculate("(2+6* 3+5- (3*14/7+2)*5)+3")).toBe(-12);
});

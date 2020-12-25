import addStrings from "../../../src/math/415_Add_Strings/index";

test("1", () => {
  expect(addStrings("9", "99")).toBe("108");
});
test("2", () => {
  expect(addStrings("98", "9")).toBe("107");
});

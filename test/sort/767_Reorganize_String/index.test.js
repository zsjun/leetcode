import reorganizeString from "../../../src/sort/767_Reorganize_String/index";

test("1", () => {
  expect(reorganizeString("aab")).toBe("aba");
});

test("2", () => {
  expect(reorganizeString("aaab")).toBe("");
});

test("3", () => {
  expect(reorganizeString("vvvlo")).toBe("vlvov");
});

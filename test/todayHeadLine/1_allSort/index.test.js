import full_arrage from "../../../src/todayHeadLine/1_allSort/index";

test("1", () => {
  expect(full_arrage(1234)).toBe(1243);
});
test("2", () => {
  expect(full_arrage(1243)).toBe(1324);
});
test("3", () => {
  expect(full_arrage(1324)).toBe(1342);
});
test("4", () => {
  expect(full_arrage(3451)).toBe(3514);
});

import minDistance from "../../../src/dp/72_Edit_Distance/index";

test("1", () => {
  expect(minDistance("horse", "ros")).toBe(3);
});

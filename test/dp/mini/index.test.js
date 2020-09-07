import getMine from "../../../src/dp/mine/index";

test("1", () => {
  expect(getMine(5, 10, [500, 200, 300, 350, 400], [5, 3, 4, 3, 5])).toBe(900);
});

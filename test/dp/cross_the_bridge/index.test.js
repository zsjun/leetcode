import crossBridge from "../../../src/dp/cross_the_bridge/index";

test("1", () => {
  expect(crossBridge([1, 2, 5, 10], 4)).toBe(17);
});

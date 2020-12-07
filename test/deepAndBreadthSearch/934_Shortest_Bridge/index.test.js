import shortestBridge from "../../../src/deepAndBreadthSearch/934_Shortest_Bridge/index";

test("1", () => {
  expect(
    shortestBridge([
      [0, 1],
      [1, 0],
    ])
  ).toBe(1);
});

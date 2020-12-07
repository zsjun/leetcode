import exit from "../../../src/deepAndBreadthSearch/79_Word_Search/index";

test("1", () => {
  expect(
    exit(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCB"
    )
  ).toBe(false);
});

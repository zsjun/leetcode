import eraseOverlapIntervals from "../../../src/greed/435_Non-overlapping_Intervals/index1";

test("1", () => {
  expect(
    eraseOverlapIntervals([
      [1, 100],
      [11, 22],
      [1, 11],
      [2, 12],
    ])
  ).toBe(2);
});

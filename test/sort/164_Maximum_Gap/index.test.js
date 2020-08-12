import maximumGap from "../../../src/sort/164_Maximum_Gap/index";

// test("1", () => {
//   expect(maximumGap([3, 6, 9, 1])).toBe(3);
// });

test("2", () => {
  expect(maximumGap([1, 1, 1, 1])).toBe(0);
});

test("3", () => {
  expect(maximumGap([100, 3, 2, 1])).toBe(97);
});

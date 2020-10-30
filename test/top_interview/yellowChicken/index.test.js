import getMinChicken from "../../../src/top_interview/yellowChicken/index1";

test("1", () => {
  expect(getMinChicken(11, 5, 7)).toBe(3);
});

// test("2", () => {
//   expect(getMinChicken(81, 5, 7)).toBe(13);
// });

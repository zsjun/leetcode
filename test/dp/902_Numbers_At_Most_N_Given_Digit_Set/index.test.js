import atMostNGivenDigitSet from "../../../src/dp/902_Numbers_At_Most_N_Given_Digit_Set/index";

test("1", () => {
  expect(atMostNGivenDigitSet(["1", "8"], 18)).toBe(4);
});

test("2", () => {
  expect(atMostNGivenDigitSet(["3", "4", "8"], 4)).toBe(2);
});

test("3", () => {
  expect(atMostNGivenDigitSet(["3", "4", "5", "6"], 64)).toBe(18);
});

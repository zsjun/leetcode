import getMaxPrices from "../../src/greed/index";

test(`DDSDS: the sky is blue1`, () => {
  expect(getMaxPrices([7, 1, 5, 3, 6, 4])).toBe(7);
});

test(`DDSDS: the sky is blue2`, () => {
  expect(getMaxPrices([1, 2, 3, 4, 5])).toBe(4);
});
test(`DDSDS: the sky is blue3`, () => {
  expect(getMaxPrices([7, 6, 4, 3, 1])).toBe(0);
});

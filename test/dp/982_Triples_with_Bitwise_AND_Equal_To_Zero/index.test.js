import countTriplets from "../../../src/dp/982_Triples_with_Bitwise_AND_Equal_To_Zero/index";

test("1", () => {
  expect(countTriplets([2, 1, 3])).toBe(12);
});

test("2", () => {
  expect(countTriplets([0, 0, 0])).toBe(27);
});

import fractionToDecimal from "../../../src/top_interview/166_Fraction_to_Recurring_Decimal/index";

test("1", () => {
  expect(fractionToDecimal(4, 333)).toBe("0.(012)");
});

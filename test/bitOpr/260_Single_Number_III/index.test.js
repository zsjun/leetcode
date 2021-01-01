import singleNumber from "../../../src/bitOpr/260_Single_Number_III/index";

test("1", () => {
  expect(singleNumber([1, 2, 1, 3, 2, 5])).toEqual([3, 5]);
});

test("2", () => {
  expect(singleNumber([0, 1, 2, 2])).toEqual([0, 1]);
});

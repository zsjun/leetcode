import NumArray from "../../../src/struct/307_Range_Sum_Query_-_Mutable/index2";

test("1", () => {
  const numArray = new NumArray([9, -8, 2, 3]);

  numArray.update(0, 3);
  console.log(numArray.sumRange(1, 1));
});

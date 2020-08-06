import NumArray from "../../../src/lineTree/307_Range_Sum_Query_-_Mutable/index";

test("1", () => {
  // const lineTree = new LineTree([0, 1, 2, 3, 4, 5]);
  // lineTree.buildLineTree(0, 0, 5);
  // // console.log(lineTree.values);
  // // lineTree.printLineTree(0, 0, 5);
  // lineTree.sumRangeLineTree(0, 0, 5, 0, 8);
  // console.log(lineTree.sumRangeLineTree(0, 0, 5, 1, 4));
  const numss = new NumArray([9, -8]);
  numss.update(0, 3);
  expect(numss.sumRange(1, 1)).toBe(-8);
  expect(numss.sumRange(0, 1)).toBe(-5);
  // expect(numss.sumRange(0, 2)).toBe(8);
});

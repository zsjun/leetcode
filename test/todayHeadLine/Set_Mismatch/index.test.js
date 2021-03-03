import findMissNum from "../../../src/todayHeadLine/Set_Mismatch/index";

test("1", () => {
  expect(findMissNum([3, 2, 3, 4, 6, 5])).toEqual([3, 1]);
});

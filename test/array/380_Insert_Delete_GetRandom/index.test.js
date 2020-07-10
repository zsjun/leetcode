import RandomizedSet from "../../../src/array/380_Insert_Delete_GetRandom/index";

test("1", () => {
  const out = [];
  const randomSet = new RandomizedSet();
  randomSet.insert(1);
  rendomSet.insert(2);
  expect(randomSet.getRandom()).toBe(2);
});

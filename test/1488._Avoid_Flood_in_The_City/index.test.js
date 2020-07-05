import avoidFlood from "../../src/1488._Avoid_Flood_in_The_City/index";

test("1", () => {
  expect(avoidFlood([1, 2, 3, 4])).toEqual([-1, -1, -1, -1]);
});

test(`arr:2`, () => {
  expect(avoidFlood([1, 2, 3, 4])).toEqual([-1, -1, -1, -1]);
});

test(`arr:3`, () => {
  expect(avoidFlood([1, 2, 0, 0, 2, 1])).toEqual([-1, -1, 2, 1, -1, -1]);
});

test(`arr:4`, () => {
  expect(avoidFlood([1, 2, 0, 1, 2])).toEqual([]);
});
test(`arr:5`, () => {
  expect(avoidFlood([69, 0, 0, 0, 69])).toEqual([-1, 69, 1, 1, -1]);
});

test(`arr:6`, () => {
  expect(avoidFlood([10, 20, 20])).toEqual([]);
});

test(`arr:7`, () => {
  expect(avoidFlood([0, 1, 1])).toEqual([]);
});
test(`arr:8`, () => {
  expect(avoidFlood([1, 0, 2, 0, 2, 1])).toEqual([-1, 1, -1, 2, -1, -1]);
});

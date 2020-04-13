import getMaxRect from "../../code/stack/index";

// test(`arr:1`, () => {
//   expect(getMaxRect([])).toBe(0);
// });

test(`arr:1`, () => {
  expect(getMaxRect([["1"]])).toBe(1);
});

test(`arr:2`, () => {
  expect(getMaxRect([["0"]])).toBe(0);
});

test(`arr:3`, () => {
  expect(getMaxRect([["1", "1"]])).toBe(2);
});

test(`arr:3`, () => {
  expect(
    getMaxRect([
      ["0", "0"],
      ["0", "0"],
    ])
  ).toBe(0);
});

test(`arr:4`, () => {
  expect(
    getMaxRect([
      ["1", "0"],
      ["0", "1"],
    ])
  ).toBe(1);
});
test(`arr:5`, () => {
  expect(
    getMaxRect([
      ["0", "1"],
      ["1", "0"],
    ])
  ).toBe(1);
});
test(`arr:6`, () => {
  expect(
    getMaxRect([
      ["0", "1"],
      ["0", "1"],
    ])
  ).toBe(2);
});

test(`arr:7`, () => {
  expect(
    getMaxRect([
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["1", "1", "1"],
    ])
  ).toBe(3);
});
